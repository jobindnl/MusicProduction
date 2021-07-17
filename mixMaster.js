const callback = (element) => {
  element.forEach(item => {
    if(item.isIntersecting) {
      item.target.classList.add('active')
    }
  })
}

const options = {
  threshold: 0.4
}

const observer = new IntersectionObserver(callback, options)
const elementArray = [...document.querySelectorAll('.element-to-watch')]

elementArray.forEach(elementInArray => {
  observer.observe(elementInArray)
})