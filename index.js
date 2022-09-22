let rigth = document.querySelector(".rigth")
let left = document.querySelector(".left")
let content_slider = document.querySelector(".content_slider")
let sliderLast = document.querySelectorAll(".slider")[3]

console.log(sliderLast)
 content_slider.insertAdjacentElement("afterbegin", sliderLast)


left.addEventListener("click", function(){

    let sliderfirst = document.querySelectorAll(".slider")[0]

    content_slider.style.marginLeft = "-200%"
    content_slider.style.transition = "all 0.5s"

    content_slider.insertAdjacentElement("beforeend", sliderLast)

    
    setTimeout(function(){
        content_slider.style.transition = "none"
        content_slider.insertAdjacentElement("beforeend", sliderfirst)
          content_slider.style.marginLeft = "-100%"    },1000)
   


})


rigth.addEventListener("click", function(){
    content_slider.style.marginLeft = "0%"
    content_slider.style.transition = "all 0.5s"
    content_slider.insertAdjacentElement("afterbegin", sliderLast)

   setTimeout(function(){
    content_slider.style.transition = "none"
    content_slider.style.marginLeft = "-100%" 


   },1000

   )

})