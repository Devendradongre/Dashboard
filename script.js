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

function renderTask() {
    let allTask = document.querySelector('.all-task')
    let sum = ''
    currentTask.forEach((elem, idx) => {
        sum = sum + ` <div class="task">
                        <h5>${elem.task}</h5>
                        <button class = "${idx}">Completed</button>
                    </div>
                    `
    })
    allTask.innerHTML = sum

    let task = document.querySelectorAll('.task')
    let btn = document.querySelectorAll('.task button')
    btn.forEach(function (elem, idx) {
        elem.addEventListener('click', function () {
            task[idx].style.display = 'none'
        })
    })
}
renderTask()

form.addEventListener('submit', function (e) {
    e.preventDefault()
    currentTask.push({
        task: formInput.value,
        details: formInputdetail.value
    })
    formInput.value = ''
    formInputdetail.value = ''
    renderTask()
})
// Dailly planner 
let input = document.querySelector('#task-input')
let time = document.querySelector('#task-time')
let btn = document.querySelector('.savebtn')
let cardcontainer = document.querySelector('.planer-container')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    let taskValue = input.value.trim()
    let timeValue = time.value

    if (!taskValue || !timeValue) {
        alert('Please fill in both task and time')
        return
    }

    cardcontainer.insertAdjacentHTML('beforeend', `
        <div class="planer-card">
            <h1>${taskValue}</h1>
            <div class="time-value">${timeValue}</div>
            <div class="clock-span">00:00:00</div>
            <button class="complete-btn">Complete</button>
        </div>
    `)

    let newCard = cardcontainer.lastElementChild
    let clockSpan = newCard.querySelector('.clock-span')
    startIndividualTimer(clockSpan, timeValue)

    input.value = ''
    time.value = ''
})

// Complete button handling (event delegation)
cardcontainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('complete-btn')) {  
        const card = e.target.closest('.planer-card')
        if (card) {
            // clear associated timer if needed (optional)
            card.remove()
        }
    }
})

// timer countdoun
function startIndividualTimer(element, targetTime) {
    let intervalId = setInterval(() => {
        let now = new Date()
        let target = new Date()
        let [hrs, mins] = targetTime.split(':').map(Number)
        target.setHours(hrs, mins, 0, 0)

        let diff = target - now

        if (diff > 0) {
            let h = Math.floor(diff / 3600000)
            let m = Math.floor((diff % 3600000) / 60000)
            let s = Math.floor((diff % 60000) / 1000)
            element.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
            element.style.color = '#0b6623'
        } else {
            element.innerText = "Time's up! ⏰"
            element.style.color = 'red'
            element.classList.add('blink')
            clearInterval(intervalId)
        }
    }, 1000)
}

