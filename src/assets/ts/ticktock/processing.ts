import state from "./state";

export const cbChangeStartValue = (key: string, val: boolean, prev: boolean) => {
    if (val === true) {
        const timeout = 1000
        const startIntervalID = setInterval(() => {
            const detail = getValueTimeAngle()
            const eventInitTicktock = new CustomEvent(`ticktock-${timeout}`, {detail})
            window.dispatchEvent(eventInitTicktock)
        }, timeout)
        state.set('startIntervalID', startIntervalID)
    } else {
        if (!state.get('startIntervalID')) return
        clearInterval(state.get('startIntervalID'))
    }
}

export const adjustMillisecond = async () => {
    const _interval = async () => {
        await new Promise(resolve => setTimeout(resolve, 1))
        const msec = Date.now()
        const millisecond = 1000
        const threshold = 100
        if (!(msec % millisecond < threshold)) await _interval()
    }

    await _interval();
}

const getValueTimeAngle = () => {
    const datetime = new Date()

    const hour = datetime.getHours()
    const min = datetime.getMinutes()
    const sec = datetime.getSeconds()

    const time  = { hour, min, sec }
    const angle = getAngle(hour, min, sec)

    return {
        time,
        angle
    }
}

const getAngle = (hour: number, min: number, sec: number): {hour: number, min: number, sec: number} => {
    const hourInClock = 12
    const minInClock = 60
    const secInClock = 60
    const anglePerHour = 360 / hourInClock
    const anglePerMin  = 360 / minInClock
    const anglePerSec  = 360 / secInClock
    const angleMinAtAngleHour = anglePerHour / minInClock
    const angleSecAtAngleMin  = anglePerMin / secInClock

    const degHour = (hour * anglePerHour) + (min * angleMinAtAngleHour)
    const degMinute = (min * anglePerMin) + (sec * angleSecAtAngleMin)
    const degSecond = sec * anglePerSec

    return {
        hour: degHour,
        min: degMinute,
        sec: degSecond
    }
}