const images = document.querySelectorAll('.panel');
console.log(document.querySelectorAll('panel'));


images.forEach((el) => {
    el.addEventListener('click', () => {
        removeAllclasses();
        el.classList.add('active');
    })

})

const removeAllclasses = () => {
    images.forEach((el) => {
        el.classList.remove('active')
    })
}