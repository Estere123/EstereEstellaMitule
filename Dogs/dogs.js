function navigateTo(sectionId) {
    const contentDiv = document.getElementById('app');

    contentDiv.innerHTML = ' ';
    
    switch(sectionId) {
        case 'home':
        contentDiv.innerHTML = `
        <div class= "home-content">
        <div class = "welcome-text">
        <p>Welcome to Dog breeds by vet bills</p>
        <p>We are here to help you find the best dog for your lifestyle</P>
        <p>You can find information about dogs initial cost and also breeds commom ilnesses</p>
        </div>

        <div class="images-dogs">
        <img src="images/french.png">
        <img src="images/corgy.jpg">
        <img src="images/spic.jpg">
        <img src="images/pug.jpg">
        </div>
        </div>
        `;
        break;
        
    
        case 'mostExpensive':
            contentDiv.innerHTML = `
            <div class="breed-container">
            <div class = "breed">
            <div class="header-container">
            <h2>Most expensive dog breeds</h2>
            <p>Here are the dog breeds that are not that friendly to Your Wallet</p>
            </div> 

          
          <div class="breed-content">
          <div class="Image-container">
           <h3>Breed name: German Shepard</h3>
            <img src="images/german.jpg">
          </div>

          <div class="breed-info">
            <p>Avarage lifespan: 10 years</p>
            <p>Most common diseases: Cancer</p>
            <p>Avarage vet bills: 100$</p>
            </div>
          </div>
        </div>

          <div class = "breed">
        <div class="breed-content">
          <div class="Image-container">
          <h3>Breed name: Mops</h3>
            <img src="images/pug.jpg">
            </div>

        <div class="breed-info">
            <p>Avarage lifespan: 7 years</p>
            <p>Most common diseases: Cancer, breathing problems</p>
            <p>Avarage vet bills: 90$</p>
            </div>
            </div>
            </div>
          </div>
            `
            break;

      case 'leastExpensive':
        
        contentDiv.innerHTML = `
        <div class="breed-container">
            <div class = "breed">
            <div class="header-container">
        <h2>Least expensive dog breeds</h2>
        <p>Here you will find dogs who are very healthly and do not need to visit vet office often</p>
        </div>

        <div class="breed-content">
        <div class="Image-container">
        <h3>Breed name: Chihuahua</h3>
            <img src="images/ch.jpg">
          </div>

        <div class="breed-info">
            <p>Avarage lifespan: 15 years</p>
            <p>Most common diseases: Old age</p>
            <p>Avarage vet bills: 40$</p>
          </div>
          </div>
          </div>

        <div class="breed">
        <div class="breed-content">
        <div class="Image-container">
            <h3>Breed name: Sheltie</h3>
            <img src="images/sheltie.jpg">
          </div>

        <div class="breed-info">
            <p>Avarage lifespan: 15 years</p>
            <p>Most common diseases: Old age</p>
            <p>Avarage vet bills: 30$</p>
          </div>
        </div>
        </div>
        </div>
        
        `
        break;

        case 'certifiedVets':
        
        contentDiv.innerHTML = `
        <div class="text-box">
        <h2>Cerified Vets</h2>
        <p>Here you will find vets that are certified and care about You and Your pet</p>
        </div>
        <div class = "vets-container">
         <div class = "vet-card">
          <img src="images/JakeCat.png">
          <div>
          <h2>Name: Jake Cat</h2>
          <p>Adress: Narva mnt 20, Tallinn</p>
          <p>Speciality: Cardiology</p>
          </div>
          </div>

<div class = "vet-card">
          <img src="images/David.jpg">
          <div>
          <h2>Name: David Davidson</h2>
          <p>Adress: Tartu mnt 20, Tallinn</p>
          <p>Speciality: Oncology</p>
          </div>
          </div>

<div class = "vet-card">
          <img src="images/Kate.jpg">
          <div>
          <h2>Name: Kate Johanson</h2>
          <p>Adress: Tartu mnt 20, Tallinn</p>
          <p>Speciality: Sonography</p>
          </div>
          </div>
        </div>
        `;
        break;

        case 'About us':
        
        contentDiv.innerHTML =`
        <div class="text-box">
         <h2>About us</h2>
         <p>We are here to help you find the pet that fits your lifestyle</p>
         </div>
         `;
        break;

        case 'contacts':
        
        contentDiv.innerHTML =`
         <div class="text-box">
        <h2>Contacts</h2>
        <p>phone: +372 222222222</p>\n<p>e-mail: dogs@gmail.com</p>
        <p>Somewhere 12, Estonia</p>
        </div>
        `;
        break;

      


      default:
       
        contentDiv.innerHTML = '<h2>Error: Invalid section ID</h2>';
}
}

document.addEventListener('DOMContentLoaded', () => {
  navigateTo('home');
});