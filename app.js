window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    const key = document.querySelector(`.key-Box[data-key = "${event.keyCode}"]`).classList.add('playing');
    audio.play();
});

function removeClass(e) {
    if(e.propertyName === 'transform') {
        this.classList.remove('playing');
    }
}

const keys = document.querySelectorAll('.key-Box');
keys.forEach(key => key.addEventListener('transitionend', removeClass));

