var category=document.querySelector(".shop")
var search=document.querySelector(".search-item")
var slideimage=document.querySelector(".image")
var showimage=document.querySelector(".image1")

category.addEventListener('click',()=>{
    search.style.display="block"
    slideimage.style.display="none"
    showimage.style.display="none"
})