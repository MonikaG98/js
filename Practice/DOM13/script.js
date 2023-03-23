// setTimeout(function(){
//     console.log("hello")
// },2000)

//mouseover()
let a1 = document.querySelector('h1')
let alertButton = document.querySelector('#alert')
let confirmButton = document.querySelector('#confirm')
let promptButton  = document.querySelector('#prompt')
let reloadButton = document.querySelector('#reload')
let Head = document.querySelector('#one')
let Aview = document.querySelector('#view')

a1.addEventListener('mouseover',function(){
    a1.style.color = "red"
})

//mouseout
a1.addEventListener('mouseout',function(){
    a1.style.color = "yellow"
})

//dbclick()
a1.addEventListener('mouseout',function(){
    a1.style.background = "purple"
})

//click()
a1.addEventListener('mouseout',function(){
    a1.style.background = "orange"
})

//reload()
console.log(window)

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
alertButton.addEventListener('click',function(){
    alert('Hiiiii')
})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
confirmButton.addEventListener('click',function(){
confirm('Do You Agree Term And Condition')
})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
promptButton.addEventListener('click',function(){
    prompt('Gues any Numer Between 1 to 10')
})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
reloadButton.addEventListener('click',function(){
  location.reload()
})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
Aview.addEventListener('click',function(){
    Head.scrollIntoView()
    
})
























