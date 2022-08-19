// Navigation bar controls

var menu_toggle = document.querySelector(".toggle");
var image=document.querySelector(".toggle>img");
var menu = document.querySelector(".menu");
var mobile_menu = document.querySelector(".mobile-menu");



var feature_box = document.querySelector("#feature-box");
var company_box = document.querySelector("#company-box");
var arrow1 = document.querySelector("#feature-box>img")
var arrow2 = document.querySelector("#company-box>img")
var features = document.querySelector(".features");
var company = document.querySelector(".company");



menu_toggle.addEventListener("click",()=>{
    if(menu.classList.contains("active")){
        mobile_menu.style.left="100vw";
        features.classList.remove('active');
        company.classList.remove('active');
        setTimeout(() => {
            menu.classList.remove('active');
            mobile_menu.style.backgroundColor="rgba(0, 0, 100, 0)";
        }, 200);
        setTimeout(() => {
            image.src="images/icon-menu.svg";
        }, 100);
    }
    else{
        menu.classList.add('active');
        setTimeout(() => {
            image.src="images/icon-close-menu.svg";
        }, 100);
        features.classList.remove('active');
        company.classList.remove('active');
        mobile_menu.style.visibility="visible";
        mobile_menu.style.left="0";
        mobile_menu.style.backgroundColor="rgba(33, 33, 33, 0.7)";
    }
})
var v=window.innerWidth;

// features and company box
feature_box.addEventListener("click",()=>{
    if(features.classList.contains("active")){
        features.classList.remove('active');
        arrow1.src="images/icon-arrow-down.svg"
    }
    else{
        features.classList.add('active');
        arrow1.src="images/icon-arrow-up.svg"
    }
})
company_box.addEventListener("click",()=>{
    if(company.classList.contains("active")){
        company.classList.remove('active');
        arrow2.src="images/icon-arrow-down.svg"
    }
    
    else{
        company.classList.add('active');
        arrow2.src="images/icon-arrow-up.svg"
    }
})
//end feature box
{/* if you want to check responsiveness in more detail 
this part is for you as this listens for event called resize*/
window.addEventListener("resize",()=>{
    var final_width=window.innerWidth;
    if(final_width>720)
    {
        if(menu.classList.contains("active")){
            company.classList.remove('active');
            features.classList.remove('active');  
            arrow1.src="images/icon-arrow-down.svg"
            arrow2.src="images/icon-arrow-down.svg"
        }
        mobile_menu.style.backgroundColor="rgba(0, 0, 100, 0)";
        menu.classList.remove('active');
        image.src="images/icon-menu.svg";
        mobile_menu.style.left="100vw";
         }
})
//end
}
function changeHero(){
if(window.innerWidth<=720)
{
    document.querySelector(".hero").src="images/image-hero-mobile.png";
}
else{
    document.querySelector(".hero").src="images/image-hero-desktop.png";
}
}
window.addEventListener("load",changeHero)

// navigation control end