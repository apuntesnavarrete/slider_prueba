let rigth = document.querySelector(".rigth")
let left = document.querySelector(".left")
let content_slider = document.querySelector(".content_slider")
let sliderLast = document.querySelectorAll(".slider")[3]

console.log(sliderLast)
 content_slider.insertAdjacentElement("afterbegin", sliderLast)


left.addEventListener("click", function(){


    content_slider.style.left = '-100%';
    content_slider.insertAdjacentElement("beforeend", sliderLast)

})


rigth.addEventListener("click", function(){
    content_slider.style.left = '0%';
    content_slider.insertAdjacentElement("afterbegin", sliderLast)

})