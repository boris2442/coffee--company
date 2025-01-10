
const links=document.querySelectorAll("a");
const menu=document.querySelector(".burger");
const rem=document.querySelector(".remov")
const sections=document.querySelectorAll("section")
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
.typeString("l'art du caffé : au coeur de l'excellence")
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

  

//   partie destinee au scroll reveal

const sr= ScrollReveal({
    origin:"top",
    duration:1000,
    reset:true,
    distance:"30px"
})
sr.reveal(".class-footer, .first-section, .second-section, .third-section, .et-a-decouvrir, .fourth-section, .text-end", {interval:200})


// partie destinee a ofsettop et ofsetheight

const scrollActive=()=>{
  sections.forEach(section=>{

let scroll=window.scrollY;
 let top=section.offsetTop;
 let height=section.offsetHeight;
 let id=section.getAttribute("id")
//  console.log(
//   id
//  );
 
 if(scroll>=top - 400 && scroll<top + height){


  links.forEach(link => {
    link.classList.remove('active-link')
    
  });
// console.log('jkjkk');

  let recuperation_id = document.querySelector(`ul li a[href*=${id}]`);
  console.log(recuperation_id);
  recuperation_id.classList.add('active-link') 
 }

  })  
}
window.addEventListener("scroll", scrollActive)