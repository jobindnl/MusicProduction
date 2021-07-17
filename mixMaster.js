const callback = (element) => {
  element.forEach(item => {
    if(item.isIntersecting) {
      item.target.classList.add('active')
      console.log(item)
    }
  })
}

const options = {
  threshold: 0.55
}

const observer = new IntersectionObserver(callback, options)
const elementArray = [...document.querySelectorAll('.element-to-watch')]

elementArray.forEach(elementInArray => {
  observer.observe(elementInArray)
})