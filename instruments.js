let photos = document.querySelectorAll("img")
let prev = document.getElementsByClassName("prev")
let next = document.getElementsByClassName("next")
let main = document.querySelector("main")

let counter = 0

main.addEventListener('click', function(e){
    if(e.target.className === 'next'){
        console.log(e);
        let slide = e.target.parentElement.previousElementSibling
        slide.style.transform = 'translateX(-300px)'
    } else if (e.target.className === 'prev'){
    
    }
})

// next[0].addEventListener("click", function (){
//     if(counter === 24 ){
//         return
//     }
//     counter++
//     slider.style.transform = "translateX(" + -300 * counter + "px)"
// })

// prev[0].addEventListener("click", function (){
//     if(counter === 0){
//         return
//     }
//     counter--
//     slider.style.transform = "translateX(" + -300 * counter + "px)"
// })

