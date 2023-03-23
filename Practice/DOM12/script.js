let head2 = document.querySelector('h2')
let head1 = document.querySelector('h1')
let para = document.querySelector('p')
let link = document.querySelector('a')
let head3 = document.querySelector('h3')
let head4 = document.querySelector('h4')

console.log(head2.style.color)
console.log(head2.style.background)
console.log(head1.style.color)
console.log(head1.style.background)

let a1 = getComputedStyle(head1)
let a2 = document.querySelector('img')
let a3=document.querySelector('input')

console.log(a2.alt)
console.log(a2.src)
console.log(a2.className)

console.log(a2.getAttribute('a11'));
a2.setAttribute('p',"122");

console.log(link.getAttribute('href'))
//console.log(link.href)

console.log(head3.dataset.id)


head4.classList.add('one','two','three')
head4.classList.remove('three')
head4.classList.toggle('three')
console.log(head4.classList.contains('three'))
console.log(head4.className) //only retrieve elements

