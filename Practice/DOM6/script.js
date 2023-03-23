let Li = document.querySelectorAll('li')
let ol = document.querySelector('ol')
let ButtonB = document.querySelector('button')

ButtonB.addEventListener('click', function () {
    for (let i = 0; i <= Li.length; i++) {
       
        if (i % 2 == 0) {
            Li[i].style.color = "green"
        }
        else {
            Li[i].style.color = "red"
        }
    }
})

