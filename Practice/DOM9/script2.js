 //program 1
 //create and insert
let ev = document.querySelector("#event")
let cr = document.createElement('li')
cr.textContent = "cherry"
ev.appendChild(cr)


 //program 2
  //adding class
cr.className = "pink"
console.log(cr.className)
cr.classList = ["pink blue black"]
console.log(cr.classList)
cr.classList.add ('purple')
cr.classList.remove('black')
cr.classList.toggle('black')
cr.classList.forEach(function(el)
{
    console.log(el)
})
console.log(cr)