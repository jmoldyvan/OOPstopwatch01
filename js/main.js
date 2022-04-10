let minText = document.querySelector('#minutes')
let secondText = document.querySelector('#seconds')

class Stopwatch {
    constructor(min, seconds) {
        this.min = min;
        this.seconds = seconds;
        this.id = null;
    }

    start() {
        this.id = setInterval(() => {
            let y = this.seconds += 1;
            secondText.innerHTML = y
            if (this.seconds === 6) {
                let x = this.min += 1;
                minText.innerHTML = x
                y = this.seconds = 0
                secondText.innerHTML = y
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.id)
        clearInterval(this.ids)
    }

    reset() {
        let resetsec = this.seconds = 0
        let resetmin = this.min = 0
        this.stop()
        secondText.innerHTML = resetsec
        minText.innerHTML = resetmin
        return this.seconds
    }
}


let watch = new Stopwatch(0, 0)


document.querySelector('#start').addEventListener('click', () => { watch.start() })
document.querySelector('#stop').addEventListener('click', () => { watch.stop() })
document.querySelector('#reset').addEventListener('click', () => { watch.reset() })

function reset() {
    watch.reset()
}