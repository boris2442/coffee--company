// const navig=document.querySelector("header  ul ");
// const menu=document.querySelector(".burger");
// menu.addEventListener("click", ()=>{
//     navig.classList.toggle("navigation")
// })

const menu=document.querySelector(".burger");
const rem=document.querySelector(".remov")
const navigation=document.querySelector("header ul");
menu.addEventListener("click", ()=>{
    navigation.classList.add("active")
    menu.style.display='none'
    rem.style.display='block'

});
rem.addEventListener("click", ()=>{
    menu.style.display='block'
    rem.style.display='none'
    navigation.classList.remove("active")
});
window.addEventListener("scroll", ()=>{
    navigation.classList.remove("active")
     menu.style.display='block'
    rem.style.display='none'
});


// partie du code reservée  typewriter

const app=document.querySelector("h1");
const typewriter=new Typewriter(app, {
    loop:true,
    delay:100
})
typewriter
.typeString("l'art du caffé : <br />au coeur de l'excellence")
.pauseFor(2000)
.deleteAll("")
.start();


// partie swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    delay:2500,
    autoplay:{
        disableOnInteraction: false, 
    },
  speed:500,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  