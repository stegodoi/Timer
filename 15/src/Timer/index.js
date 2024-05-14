import * as el from './elements.js'

export function start(minutes, seconds) {
    updateDisplay(minutes, seconds)
    el.buttonPlay.addEventListener('click', () => {

        const intervalId = setInterval(() => {
            updateDisplay(minutes, seconds)
    
            if(seconds > 0 && minutes >= 0) {
               seconds--
            } else if (minutes > 0) {
                seconds = 59
                minutes--
               
            } else {
                clearInterval(intervalId)
            }
            
        }, 1000)
    
        el.buttonStop.addEventListener('click', () => {
            clearInterval(intervalId)
        })
    
        el.buttonPlus.addEventListener('click', () => {
            minutes += 5
            seconds = Number(el.secondsSpan.textContent)
            updateDisplay(minutes, seconds)       
        })
    
        el.buttonMinus.addEventListener('click', () => {
            if(minutes >= 5){
                console.log(minutes)
                minutes -= 5
                seconds = Number(el.secondsSpan.textContent)
                updateDisplay(minutes, seconds)
            }
        })
    })
}

export function updateDisplay(minutes, seconds) {
    el.minutesSpan.textContent = String(minutes).padStart(2, "0")
    el.secondsSpan.textContent = String(seconds).padStart(2, "0")
}

