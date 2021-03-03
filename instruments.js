let photos = document.querySelectorAll("img")
let prev = document.getElementsByClassName("prev")
let next = document.getElementsByClassName("next")
let main = document.querySelector("main")

//array to keep track of counter for each of the photo-slider transition
let array = {
    'photo-perc': 0,
    'photo-drums': 0,
    'photo-piano': 0,
    'photo-guitar': 0
} 
let counter = 0

main.addEventListener('click', function(e){
    if(e.target.className === 'next'){
        // console.log(e);
        let slide = e.target.parentElement.previousElementSibling
        // console.log(slide.className);
        let str = slide.className
        if(array[str] === 7){
            return
        }
        array[str] += 1
        slide.style.transform = 'translateX('+ -300 * array[str] + 'px)'
        e.stopPropagation()
    } else if (e.target.className === 'prev'){
        // console.log(e);
        let slide = e.target.parentElement.previousElementSibling
        // console.log(slide.className);
        let str = slide.className
        if(array[str] === 0){
            return
        }
        array[str] -= 1
        slide.style.transform = 'translateX('+ -300 * array[str] + 'px)'
        e.stopPropagation()
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

