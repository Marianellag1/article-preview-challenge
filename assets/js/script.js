// console.log("hello world"); it works

var hiddenIcon = document.getElementById("hidden-icon");
var arrowBtn = document.getElementById("btn");
// var authorMichelle =document.querySelector(".author");
// var cardShare = document.querySelector(".card-share");
// var socialIcon = document.getElementById("social-icon");

arrowBtn.addEventListener("click", (e) => {
    hiddenIcon.classList.toggle('hidden');
    // authorMichelle.classList.toggle('hidden');

    // socialIcon.classList.toggle('hidden');
})