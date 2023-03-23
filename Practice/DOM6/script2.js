let UlList = document.querySelector('ul')
let liList = document.querySelectorAll('li')

UlList.addEventListener('mouseover', function () {
    for (let i = 0; i < liList.length; i++) {
        liList[i].textContent = liList[i].textContent.toUpperCase()
    }
})

UlList.addEventListener('mouseout', function () {
    for (let i = 0; i < liList.length; i++) {
        liList[i].textContent = liList[i].textContent.toLowerCase()
    }
})











