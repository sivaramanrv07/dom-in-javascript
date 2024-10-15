// Question 1
const header = document.querySelector(".header");
const h1 = document.getElementById("h1");
const head = header.textContent
h1.addEventListener("click", () => {
    alert(head)
})
// Question 2
// Add box
let addBox = document.getElementById("addBox");
let container = document.querySelector(".container")
let boxCount = 0;
addBox.addEventListener("click", () => {
    let newBox = document.createElement("div");
    newBox.classList.add("box-style");
    newBox.textContent = "New Box";
    container.appendChild(newBox);
    boxCount++;
})
// Remove box
let removeBox = document.getElementById("removeBox");
removeBox.addEventListener("click", () => {
    let lastBox = document.querySelector(".box-style:last-child");
    container.removeChild(lastBox);
    boxCount--;
})
// Question 3
let countButton = document.getElementById("showBoxCount");
countButton.addEventListener("click", () => {
    alert("There boxes count is "+boxCount);
})
// Question 4
let link = document.getElementById("link");
link.addEventListener("click", () => {
    let links = document.createElement("a");
    links.href = " ";
    links.textContent = "Vist example..";
    container.appendChild(links);
})
