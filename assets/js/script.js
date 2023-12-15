// console.log("hello world"); it works

var hiddenIcon = document.getElementById("hidden-icon");
var arrowBtn = document.getElementById("btn");
var socialIcon = document.getElementById("social-icon");

arrowBtn.addEventListener("click", (e) => {
    hiddenIcon.classList.toggle('hidden');
    // socialIcon.classList.toggle('hidden');
})