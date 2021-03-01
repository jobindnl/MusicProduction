let photos = document.querySelectorAll("img")
let prev = document.getElementsByClassName("prev")
let next = document.getElementsByClassName("next")
let slider = document.getElementsByClassName("slider")
slider = slider[0]

let counter = 0
next.addEventListener("click", function (){
    if(counter === 8 ){
        return
    }
    prev.style.display = ""
    counter++
    console.log(counter);
    slider.style.transform = "translateX(" + -532 * counter + "px)"
})

prev.addEventListener("click", function (){
    if(counter === 0){
        return
    }
    counter--
    console.log(counter);
    slider.style.transform = "translateX(" + -532 * counter + "px)"
})

