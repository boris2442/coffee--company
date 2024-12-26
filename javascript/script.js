// const navig=document.querySelector("header  ul ");
// const menu=document.querySelector(".burger");
// menu.addEventListener("click", ()=>{
//     navig.classList.toggle("navigation")
// })

const menu=document.querySelector(".burger");
const navigation=document.querySelector("header ul");
menu.addEventListener("click", ()=>{
    navigation.classList.toggle("active")
})