const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

let Submit = document.getElementById("Submit");

Submit.addEventListener("click", function(){
    if(placeName.value ==""){
        alert("Fill Form")
    }
    else{
        alert(placeName.value + " Tour Booked")
    }
});

ScrollReveal().reveal(".header-content h1",{
...scrollRevealOption,
});

ScrollReveal().reveal(".header-content .section-description",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header-content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about-content .section-description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".booking", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tour-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination-card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper",{
    loop :true,
});

ScrollReveal().reveal(".blog-card",{
    ...scrollRevealOption,
    interval:500,
});
