var meuIcon = document.querySelector(".menu_icon");
var sideBar = document.querySelector(".sideBar");
var container = document.querySelector(".container");

meuIcon.onclick = function(){
    sideBar.classList.toggle("reduzSideBar");
    container.classList.toggle("containerLargo");
}

