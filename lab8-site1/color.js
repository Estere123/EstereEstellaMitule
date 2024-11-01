const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn1");
const colorPanel = document.querySelector("#colorPanel");
const body = document.querySelector("body");
const ColorCode = document.querySelector('#colorCode')
btn.addEventListener('click', CahngeColor)

function CahngeColor() {
console.log("Hey, you cliked me")
let index = Math.floor(colors.length * Math.random())
console.log(index, colors.length[index])
colorPanel.style.backgroundColor = colors[index]
ColorCode.innerHTML = `Background Color: ${colors[index]}`;
}

const btn2 = document.querySelector(".btn2")
btn2.addEventListener('click', CahngeColorRGB);
function CahngeColorRGB() {
    console.log("There are RGB random colors")
    const [r, g, b] = randomRgbColor();
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = rgbColor ;
    ColorCode.innerHTML = rgbColor;
    console.log("Updated color code to:", rgbColor); 
}
function randomRgbColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return [r,g,b];
}

const btn3 = document.querySelector(".btn3")
btn3.addEventListener('click', ChngeColorHEX);

function ChngeColorHEX () {
    console.log("you got random Hex colors");
    let letters = "0123456789ABCDEF";
    let color = '#'
    for (let i = 0; i < 6; i++) 
        color += letters[(Math.floor(Math.random() * 16))]; 
    console.log(color);
    document.body.style.backgroundColor = color;
    ColorCode.innerHTML = color;
    console.log("Generated hex color", color)
}