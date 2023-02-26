const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const sunMoon = document.querySelector(".sunMoon")
sun.addEventListener("click",()=>{
    sunMoon.style.animationName = "rotate-90";
})
moon.addEventListener("click",()=>{
    sunMoon.style.animationName = "rotate90";

})