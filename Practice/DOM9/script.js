//program 1
console.log(document)
console.log(document.body)

let Id = document.getElementById ("one")
console.log(Id)
let Class = document.getElementsByClassName("two")
console.log(Class)
let Tag = document.getElementsByTagName("h1")
console.log(Tag)



//program 2
//nodelist and html 
let q1 = document.querySelectorAll('li')
console.log(q1)

let q2 = document.getElementsByTagName('li')
console.log(q2)



// //<h1 class = " `blue green orange sky">heading `</h1>"

// let h1 = document.querySelector('.sky')
// console.log(h1)
// let h11 = document.querySelector("h1[class = 'blue green orange sky']")
// console.log(h11)