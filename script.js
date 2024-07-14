var category=document.querySelector(".shop")
var search=document.querySelector(".search-item")
var slideimage=document.querySelector(".image")
var showcontent=document.querySelector(".content")

category.addEventListener('click',()=>{
    search.style.display="block"
    slideimage.style.display="none"
    showcontent.style.display="none"
})
