const inp = document.querySelector('.input')
const btn = document.querySelector('.btn')
const ul = document.querySelector('.list>ul')
let flag = true

inp.addEventListener('input', () => {
    console.log('inp', inp.value);
})
btn.addEventListener('click', () => {
    console.log(inp.value);
    addItem()

})

function myDelete(s) {
    s.parentElement.remove()
    console.log('delete shod ')
}
function done(s) {
    if (flag) {
        s.parentElement.style.backgroundColor = 'green'
        flag = false
    } else {
        s.parentElement.style.backgroundColor = '#4eb9cd'
        flag = true

    }

}
function addItem() {
    if (inp.value != '') {
        let li = document.createElement('li')
        li.innerHTML = `
        <p onclick='done(this)'>${inp.value}</p>
        <span onclick='myDelete(this)'>X</span>
        `
        ul.appendChild(li)
        inp.value = null
        inp.focus()
    } else {
        alert('task name could not be empty...')
    }
}
function handleEnterPress(e) {

    if (e.key === "Enter") {
        addItem()
    }

}

// flag++