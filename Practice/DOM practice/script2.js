let olList = document.querySelector('ol')
let liList = document.querySelectorAll('li')
let Button = document.querySelector('button')
document.querySelector('h1').style.color = "red"

Button.addEventListener('click', function () {
    for (let i = 0; i <= liList.length; i++) {
        if (i % 2 == 0) {
            liList[i].style.color = "purple"
            liList[i].style.background = "yellow"

        }
        else {
            liList[i].style.color = "red"
            liList[i].style.background = "Aqua"
        }

    }
})












