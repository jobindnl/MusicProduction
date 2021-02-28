let photos = document.querySelectorAll("img")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let slider = document.getElementById("slider")

let counter = 1
next.addEventListener("click", function (){
    counter++
    slider.style.transform = "translateX(" + -532 * counter + "px)"
})

