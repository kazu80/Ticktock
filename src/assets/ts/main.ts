import { ticktock } from "./ticktock";

window.addEventListener('load', (event) => {
    window.addEventListener('initTicktock', (e: CustomEvent) => {
        const hourHand = document.getElementById('hour')
        const minuteHand = document.getElementById('minute')
        const secondHand = document.getElementById('second')

        const { angle } = e.detail

        const degHour = `${angle.hour}deg`
        const degMinute = `${angle.min}deg`
        const degSecond = `${angle.sec}deg`

        hourHand.style.transform = `translate(-50%, -100%) rotate(${degHour})`
        minuteHand.style.transform = `translate(-50%, -100%) rotate(${degMinute})`
        secondHand.style.transform = `translate(-50%, -100%) rotate(${degSecond})`
    })

    const foo = ticktock()
    foo.start()

    setInterval(() => foo.stop(), 5000)
})