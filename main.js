const menuBTN=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav_links");

const menuBTNicon=menuBTN.querySelector("i");

menuBTN.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");

    menuBTNicon.setAttribute("class",isOpen?"ri-close-large-fill":"ri-menu-line");
});