// let HeadOne = document.querySelector('h1[name="nm"]')
// let HeadTwo = document.querySelector('#One')
// let HeadThree = document.querySelector('.Two')
// let Hlist = document.querySelectorAll('h1')

// console.log(HeadOne)
// console.log(HeadTwo)
// console.log(HeadThree)
// console.log(Hlist)

let q2 = document.querySelector('body')
console.log(q2)

q2.addEventListener('click',function(){
    console.log(event.target)
    console.log(event.target.className)
    console.log(event.target.tagName)
})


