import {ticktock} from "./ticktock";


window.addEventListener('load', (event) => {
    const hourHand = document.getElementById('hour')
    const minuteHand = document.getElementById('minute')
    const secondHand = document.getElementById('second')

    if (!hourHand || !minuteHand || !secondHand) {
        throw new Error('not find element')
    }

    window.addEventListener('ticktock-1000', ((e: CustomEvent ) => {
        const { angle } = e.detail

        const degHour = `${angle.hour}deg`
        const degMinute = `${angle.min}deg`
        const degSecond = `${angle.sec}deg`

        hourHand.style.transform = `translate(-50%, -100%) rotate(${degHour})`
        minuteHand.style.transform = `translate(-50%, -100%) rotate(${degMinute})`
        secondHand.style.transform = `translate(-50%, -100%) rotate(${degSecond})`
    }) as EventListener)

    ticktock().start()
})