let olList = document.querySelector('ol')
let ButtonB = document.querySelector('button')
let inputText = document.querySelector('input')

ButtonB.addEventListener('click',function(){
    olList.style.color = "blue"
    let text = inputText.value
   let newLi = document.createElement('li')
    newLi.textContent = text
    olList.appendChild(newLi)
    inputText.value =""
})


