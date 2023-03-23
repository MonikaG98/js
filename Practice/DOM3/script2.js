let HH = document.querySelector('h1')
let BB = document.querySelector('button')
let II = document.querySelector('input')

console.log(HH)
console.log(BB)
console.log(II)

BB.addEventListener('click', function () {
    let colorText = II.value
    HH.style.color = colorText
    II.value = ""
})





