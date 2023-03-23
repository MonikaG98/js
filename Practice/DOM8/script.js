let U = document.querySelector('ul')
let I = document.querySelector('input')
let O = document.querySelector('#one')
let liList = document.querySelectorAll('li')

for (let i = 0; i < liList.length; i++) {
    console.log(liList[i])
    createButton(liList[i])
}

U.addEventListener('click', function () {

    if (event.target.tagName === 'BUTTON') {

        if (event.target.className === 'remove') {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }

        else if (event.target.className === 'up') {
            let li = event.target.parentElement
            let ul = li.parentElement
            let prevli = li.previousElementSibling
            if (prevli) {
                ul.insertBefore(li, prevli)
            }


        }
        else if (event.target.className === 'down') {
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextli = li.nextElementSibling
            if (nextli) {
                ul.insertBefore(nextli,li)
            }
        }
    }
})



O.addEventListener('click', function () {
    let text = I.value
    let newE = document.createElement('li')
    newE.textContent = text
    createButton(newE)
    U.appendChild(newE)
    I.value = ""
})

function createButton(li) {
    let remove = document.createElement('button')
    remove.textContent = "remove"
    remove.className = "remove"
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "up"
    up.className = "up"
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "down"
    down.className = "down"
    li.appendChild(down)
}









