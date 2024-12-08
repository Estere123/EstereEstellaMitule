const expensiveDogs = [
    {name: "German Shepherd", query:"germanshepherd", lifeExpectancy: 10, vetBills:"300$", commonDiseases:"Cancer"}, 
    {name: "Samoyed", query:"samoyed", lifeExpectancy: 12, vetBills:"250$", commonDiseases: "Hip dysplasia"},
    {name: "Husky", query:"husky", lifeExpectancy: 13, vetBills:"200", commonDiseases: "Hip dysplasia"},
    {name: "Mastiff", query:"mastiff", lifeExpectancy: 8, vetBills:"150", commonDiseases: "Hip dysplasia"},
    {name: "English Mastiff", query:"mastiff/english", lifeExpectancy: 7, vetBills:"100", commonDiseases: "Hip dysplasia, Diabetes"},
];
    
let favDogs = JSON.parse(localStorage.getItem("favDogs")) ?? [];
if (!Array.isArray || !Array.isArray(favDogs)) {
  favDogs = [];
}
console.log("Retrieved favDogs from local storage:", favDogs);

async function getDogImages(dog) {
    const fetchUrl = `https://dog.ceo/api/breed/${dog.query}/images/random`;
    const response = await fetch(fetchUrl);    
    const imageLink = (await response.json()).message;
    
    const expensiveBreed = document.createElement("div");
    expensiveBreed.classList.add("breed");
    
    expensiveBreed.innerHTML = `
      <div class="breed-content">
        <div class="Image-container">
          <h3>Breed name: ${dog.name}</h3>
          <img src="${imageLink}">
        </div>

        <div class="breed-info">
          <p>Avarage lifespan: ${dog.lifeExpectancy} years</p>
          <p>Most common diseases: ${dog.commonDiseases}}</p>
          <p>Avarage vet bills: 100$ ${dog.vetBills}</p>
          <i class="fa-solid fa-dog"></i>
        </div>
        <button onClick="">
            
        </button>
      </div>`;

const isFavorite = favDogs.includes(dog.name); 
if (isFavorite) {
  document.querySelector("#favorite-dogs").appendChild(expensiveBreed);
}
else {
  document.querySelector("#ebc").appendChild(expensiveBreed);
}

const dogIcon = expensiveBreed.querySelector('.fa-dog');
dogIcon.addEventListener('click', () => toggleFavorite(dogIcon, expensiveBreed));


function toggleFavorite(iconElement, breedElement) {
const dogName = iconElement.getAttribute('data-dog-name');

  if (favDogs.includes(dogName)) {
  favDogs = favDogs.filter(name => name !== dogName);
  iconElement.classList.remove('favorite');
  document.querySelector("#ebc").appendChild(breedElement);
  }
  else {
    favDogs.push(dogName);
    iconElement.classList.add('favorite');
    document.querySelector("#favorite-dogs").appendChild(breedElement);
  }
 localStorage.setItem("favDogs", JSON.stringify(favDogs));
}
}
expensiveDogs.forEach(dog => getDogImages(dog));

