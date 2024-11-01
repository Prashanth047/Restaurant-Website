const menuBTN=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav_links");

const menuBTNicon=menuBTN.querySelector("i");

menuBTN.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");

    menuBTNicon.setAttribute("class",isOpen?"ri-close-large-fill":"ri-menu-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBTN.setAttribute("class","ri-menu-line")
})

const scrollreveal={
    distance: "50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal('.header_image img',{
    ...scrollreveal,
    origin:"right",
});

ScrollReveal().reveal('.header_content h2',{
    ...scrollreveal,
    delay:500,
});

ScrollReveal().reveal('.header_content h1',{
    ...scrollreveal,
    delay:1000,
});

ScrollReveal().reveal('.order_card',{
    ...scrollreveal,
    interval:500,
});

ScrollReveal().reveal('.event_content',{
    duration:1000,
});



