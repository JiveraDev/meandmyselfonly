const header = document.querySelector("header");


window.addEventListener("scroll", () => {
  skillsCounter();
});

// nav para d magalaw
function stickyNavbar(){
  header.classList.toggle("scrolled", pageYOffset > 0)
  
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

// scroll animation
let sr = ScrollReveal({
  duration:1000,
  distance:"60px"
})
sr.reveal('.showcase_area', {origin: "top",delay: 600});
sr.reveal('.showcase_area .subheading', {origin: "left",delay: 600});
sr.reveal('.showcase_area .text', {origin: "left",delay: 400});
sr.reveal('.showcase_area .cta', {origin: "bottom",delay:1000});
sr.reveal(".showcase-image", {origin: "top", delay: 700});
sr.reveal('.showcase_area .heading', {origin: "left",delay: 500});
sr.reveal('.about .about-info', {origin: "left"});
sr.reveal('.about .about-grid', {origin: "right"});
sr.reveal('.skill-wrap', {origin: "bottom"});
sr.reveal('.contact section .contact-info', {origin: "right"});
sr.reveal('.contact-form', {origin: "left"});
 //

 let firstTheme = localStorage.getItem("dark");
 const toggle_btn = document.querySelector('.toggle-btn'); // Make sure to select the toggle button
 
 changeTheme(firstTheme === '1'); // Use strict comparison to check if '1'
 
 function changeTheme(isDark) {
   const body = document.body;
 
   if (isDark) {
     body.classList.add("dark");
     toggle_btn.classList.replace("uil-moon", "uil-sun");
     localStorage.setItem("dark", "1");
   } else {
     body.classList.remove("dark");
     toggle_btn.classList.replace("uil-sun", "uil-moon");
     localStorage.setItem("dark", "0");
   }
 }  
 
 toggle_btn.addEventListener("click", () => {
   changeTheme(!document.body.classList.contains("dark"));
 });
 const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear form fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });