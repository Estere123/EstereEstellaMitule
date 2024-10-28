const secondsElement = document.getElementById("seconds");
const due = "30 October 2024";
const dueDate = new Date(due);
console.log(dueDate)

const currentDate = newDate();
console.log(currentDate)

let diffTime = (dueDate - currentDate)/1000;
console.log(diffTime)


secondsElement.innerHTML = 100;