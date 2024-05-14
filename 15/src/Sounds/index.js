import * as audios from './audio.js'
import * as elements from './elements.js'

function isSoundPlaying() {
    if (document.getElementsByClassName('music-on').length != 0) {
      return true
    }
    return false
}

function allSoundsOff() {
    if(isSoundPlaying()) {
        audios.coffeeShopAudio.pause()
        audios.fireplaceAudio.pause()
        audios.forestAudio.pause()
        audios.rainAudio.pause()

        elements.coffeeShopIcon.classList.remove('music-on')
        elements.fireplaceIcon.classList.remove('music-on')
        elements.forestIcon.classList.remove('music-on')
        elements.rainIcon.classList.remove('music-on')
    }
}

function soundOn(sound, icon) {
    icon.classList.add('music-on')
    sound.play()
}

function toggleSound(sound, icon) {
    return isSoundPlaying() ? allSoundsOff() : soundOn(sound, icon)
}

export function start() {
    elements.forestIcon.addEventListener('click', () => {
        toggleSound(audios.forestAudio, elements.forestIcon)
    })
    
    elements.rainIcon.addEventListener('click', () => {
        toggleSound(audios.rainAudio, elements.rainIcon)
    })
    
    elements.coffeeShopIcon.addEventListener('click', () => {
        toggleSound(audios.coffeeShopAudio, elements.coffeeShopIcon)
    })
    
    elements.fireplaceIcon.addEventListener('click', () => {
        toggleSound(audios.fireplaceAudio, elements.fireplaceIcon)
    })
}

