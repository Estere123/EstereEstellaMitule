const expensiveDogs = [
  { name: "German Shepherd", query: "germanshepherd", lifeExpectancy: 10, vetBills: "300$", commonDiseases: "Cancer" },
  { name: "Samoyed", query: "samoyed", lifeExpectancy: 12, vetBills: "250$", commonDiseases: "Hip dysplasia" },
  { name: "Husky", query: "husky", lifeExpectancy: 13, vetBills: "200$", commonDiseases: "Hip dysplasia" },
  { name: "Mastiff", query: "mastiff", lifeExpectancy: 8, vetBills: "150$", commonDiseases: "Hip dysplasia" },
  { name: "English Mastiff", query: "mastiff/english", lifeExpectancy: 7, vetBills: "100$", commonDiseases: "Hip dysplasia, Diabetes" },
];

document.addEventListener('DOMContentLoaded', async () => {
  const breedContainer = document.querySelector(".breed-container");
  const searchInput = document.getElementById("searchInput");
  const sortButton = document.querySelector("#sortVetBills");
  const images = {};
  let sortAscending = true;

async function fetchImages() {
  const promises = expensiveDogs.map(async dog => {
    const imageLink = await getDogImage(dog);
    images[dog.name] = imageLink;
    return {...dog, imageLink};
  });
  const dogsWithImages = await Promise.all(promises);
  updateBreedContainer(dogsWithImages);
}


function updateBreedContainer(dogs) {
  breedContainer.innerHTML = "";
  dogs.forEach(dog => addDog(dog, images[dog.name], breedContainer));
}


//Search by breed name


function filterByName(e) {
  const searchTerm = e.target.value.trim().toLowerCase();
  const dogItems = document.querySelectorAll(".breed");
  dogItems.forEach(item => {
    const breedName = item.querySelector("h3").innerText.toLowerCase();
    if 
    (breedName.includes(searchTerm)) {
      item.style.display='block';
    }else {
      item.style.display= "none";
    }
   });
  }

  searchInput.addEventListener("input", filterByName);


  // Sorting 



sortButton.addEventListener("click", () => {
  const sortedDogs = [...expensiveDogs].sort((a,b) => {
    const aVetBills = parseInt(a.vetBills.replace("$", ""));
    const bVetBills = parseInt(b.vetBills.replace("$", ""));
    return sortAscending? aVetBills - bVetBills : bVetBills - aVetBills;
  });
  sortAscending = !sortAscending;
  updateBreedContainer(sortedDogs)
});

async function getDogImage(dog) {
 
  if (!dog || !dog.query) {
    console.error
      ('Invalid dog object or missing query property:', dog); 
      return null;
  }

  const fetchUrl = `https://dog.ceo/api/breed/${dog.query}/images/random`;
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json();
    return data.message;

    
  } catch (error) {
    console.error('Error fetching dog image:', error);
    return null;
  }
}

function addDog(dog, imageLink, container) {
    const expensiveBreed = document.createElement("div");
  expensiveBreed.classList.add("breed");

  expensiveBreed.innerHTML = ` 
<div class="breed-content"> 
<div class="Image-container">
<h3>Breed name: ${dog.name}</h3> 
<img src="${imageLink}"> 
</div> <div class="breed-info"> 
<p>Average lifespan: ${dog.lifeExpectancy} years</p> 
<p>Most common diseases: ${dog.commonDiseases}</p> 
<p>Average vet bills: ${dog.vetBills}</p> 
<i class="addFavorite fa-solid fa-dog"></i> </div> 
</div>`;

const favoriteIcon = expensiveBreed.querySelector('.addFavorite');
favoriteIcon.addEventListener('click', () => addFavorite(dog, imageLink));
  if (container) {
    container.appendChild(expensiveBreed);
  } else {
    console.error("Container not found")
  }
}
await fetchImages();
});


function getdogsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
  
}

function addFavorite(dog, imageLink) {
  const localStorageKey = 'favorites';
  let favorites = getdogsFromLocalStorage();

  const favoriteDog = {name:dog.name, imageLink: imageLink};
  favorites.push(favoriteDog);
  localStorage.setItem(localStorageKey, JSON.stringify(favorites));
  displayFavorites();
}

function removeFavorite(dog) {
let favorites = getdogsFromLocalStorage();
favorites = favorites.filter(fav => fav.name !== dog.name);
localStorage.setItem('favorites', JSON.stringify(favorites));
displayFavorites();
}

function displayFavorites() {
const favoriteContainer = document.querySelector('.favorites-container');
if (favoriteContainer) {
  favoriteContainer.innerHTML = '';
  const favorites = getdogsFromLocalStorage();
  favorites.forEach(dog => {
    const dogElement = document.createElement('div');
    dogElement.classList.add('breed');
    dogElement.innerHTML = `
    <div class="breed-content"> 
<div class="Image-container">
<h3>Breed name: ${dog.name}</h3> 
<img src="${dog.imageLink}"> 
<button class="clear"><i class="fas fa-window-close"></i></button>
</div> 
</div>`;
const removeButton = dogElement.querySelector('.clear');
removeButton.addEventListener('click', () => removeFavorite(dog));
favoriteContainer.appendChild(dogElement);
  });
}
}


