const header = document.querySelector("header");

const first_skill = document.querySelector(".skills:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () =>{
    skillsCounter();
})

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);


/***************   SCROLL  ANIMATION **************/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", {delay: 300});
sr.reveal(".showcase-image", { origin: "top", delay: 300});


/***************   SKILLS  ANIMATION **************/


