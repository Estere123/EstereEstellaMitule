const hamburger = document.getElementById('hamburger');
const navUL = document.querySelector('nav> ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});
const expensiveDogs = [
  { name: "German Shepherd", query: "germanshepherd", lifeExpectancy: 10, vetBills: "300$", commonDiseases: "Cancer" },
  { name: "Samoyed", query: "samoyed", lifeExpectancy: 12, vetBills: "250$", commonDiseases: "Hip dysplasia" },
  { name: "Husky", query: "husky", lifeExpectancy: 13, vetBills: "200", commonDiseases: "Hip dysplasia" },
  { name: "Mastiff", query: "mastiff", lifeExpectancy: 8, vetBills: "150", commonDiseases: "Hip dysplasia" },
  { name: "English Mastiff", query: "mastiff/english", lifeExpectancy: 7, vetBills: "100", commonDiseases: "Hip dysplasia, Diabetes" },
];

document.addEventListener('DOMContentLoaded', () => {
  const breedContainer = document.querySelector(".breed-container");
  const searchInput = document.getElementById("searchInput");
  const sortButton = document.querySelector("#sortVetBills");




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
const sorted = [...expensiveDogs].sort((a, b) => {
  const aVetBills = parseInt(a.vetBills.replace("$").trim());
  const bVetBills = parseInt(b.vetBills.replace("$").trim());
  return aVetBills - bVetBills;
});
if (breedContainer) {
  breedContainer.innerHTML="";
  sorted.forEach(dog => getDogImages(dog));
}

});

expensiveDogs.forEach(dog => getDogImages(dog));

});

const favButtons = document.querySelector(".addFavorite");
console.log(favButtons  )

console.log("Script loaded and running");
// localStorage.removeItem("favDogs");
let favDogs = JSON.parse(localStorage.getItem("favDogs")) ?? [];

if (!Array.isArray(favDogs)) {
  favDogs = [];
}

console.log("Retrieved favDogs from local storage:", favDogs)



async function getDogImages(dog) {
  console.log('Dog object:', dog);
  if (!dog || !dog.query) {
    console.error
      ('Invalid dog object or missing query property:', dog); return;
  }

  const fetchUrl = `https://dog.ceo/api/breed/${dog.query}/images/random`;
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json();
    const imageLink = data.message;

    console.log("RETURMED DOG : ",data)

    addDog(dog, imageLink, ".breed-container");
  } catch (error) {
    console.error('Error fetching dog image:', error);
  }
}

function addDog(dog, imageLink, containerSelector) {
  const container = document.querySelector(containerSelector);
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
<p>Average vet bills: $100 ${dog.vetBills}</p> 
<i class="addFavorite fa-solid fa-dog"></i> </div> 
</div>`;



  if (container) {
    container.appendChild(expensiveBreed);
  } else {
    console.error("Container not found")
  }
}

