var meuIcon = document.querySelector(".menu_icon");
var sideBar = document.querySelector(".sideBar");

meuIcon.onclick = function(){
    sideBar.classList.toggle("reduzSideBar");
}