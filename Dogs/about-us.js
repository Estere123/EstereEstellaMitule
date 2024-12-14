document.addEventListener('DOMContentLoaded', function() {
const slider = document.getElementById('slider');

async function fetchImages() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
    const data = await response.json();
    return data.message;
}

function createImageElement(src) {
    const img = document.createElement('img');
    img.src = src;
    return img;
}

async function setupSlider() {
    const images = await fetchImages();
    if(Array.isArray(images))
    images.forEach((imageSrc, index) => {
        const img = createImageElement(imageSrc);
        if (index === 0) {
            img.classList.add('active');
        }
        slider.appendChild(img);
    });
startSlider();
}
 function startSlider() {
    let index = 0;
    const images = document.querySelectorAll('#slider img');
    setInterval(() => {
        images[index].classList.remove('active');
        index = (index+1) % images.length;
        images[index].classList.add('active');
    }, 3000);
 }

setupSlider();

});