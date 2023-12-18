// console.log("hello world"); it works

var hiddenIcon = document.getElementById("hidden-icon");
var arrowBtn = document.getElementById("btn");

arrowBtn.addEventListener("click", (e) => {
    hiddenIcon.classList.toggle('hidden');
})