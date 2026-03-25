function opencards() {
    var allelem = document.querySelectorAll('.elem')
    var fullelem = document.querySelectorAll('.fullelem')
    let close = document.querySelectorAll('.fullelem .back')
    allelem.forEach((element, id) => {
        element.addEventListener('click', () => {
            fullelem[id].style.display = 'block'
        })
    })
    close.forEach(function (elem, id) {
        elem.addEventListener('click', function () {
            fullelem[id].style.display = 'none'
        })

    })
}
opencards()

let form = document.querySelector('.add-task form')
let formInput = document.querySelector('.add-task form input')
let formInputdetail = document.querySelector('.add-task form textarea')

let currentTask = []

function renderTask(){
let allTask = document.querySelector('.all-task')
let sum = ''
currentTask.forEach((elem ,idx )=>{
    sum = sum + ` <div class="task">
                        <h5>${elem.task}</h5>
                        <button class = "${idx}">Completed</button>
                    </div>
                    `
})
allTask.innerHTML = sum

let task = document.querySelectorAll('.task')
let btn = document.querySelectorAll('.task button')
btn.forEach(function(elem,idx){
    elem.addEventListener('click',function(){
        task[idx].style.display = 'none'
    })
})
}
renderTask()

form.addEventListener('submit', function (e) {
    e.preventDefault()
    currentTask.push({task:formInput.value,
        details:formInputdetail.value
    })
    formInput.value=''
    formInputdetail.value = ''
    renderTask()
})
