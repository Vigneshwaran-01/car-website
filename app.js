const navToggle=document.querySelector(".navbar_toggle");
const link =document.querySelector(".nav_links");
const closeBtn=document.getElementById("close-btn");

navToggle.addEventListener("click",()=>{
    link.classList.toggle("show_nav");
    link.classList.toggle("show_navs");
  

});
closeBtn.addEventListener("click",()=>{
    link.classList.remove("show_nav");
    link.classList.remove("show_navs");
})

