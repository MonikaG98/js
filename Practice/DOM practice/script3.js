let LILIST = document.querySelectorAll('li')
let UL = document.querySelector('ul')
document.querySelector('h1').style.color="red"


UL.addEventListener('mouseover' ,function(){
    for(let i = 0 ; i<LILIST.length ; i++){
        LILIST[i].textContent = LILIST[i].textContent.toUpperCase()
        UL.style.color = "blue"

    }
})
UL.addEventListener('mouseout', function(){


   for(let i = 0 ; i<LILIST.length ; i++){
        LILIST[i].textContent = LILIST[i].textContent.toLowerCase()

    }
}) 
