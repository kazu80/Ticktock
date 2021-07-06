import state from "./state";

export const cbChangeStartValue = (key: string, val: boolean, prev: boolean) => {
    if (val === true) {
        const startIntervalID = setInterval(() => {
            getDatetime()
        }, 1000)
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
        if (!(msec % 1000 < 100)) await _interval()
    }

    await _interval();
}

const getDatetime = () => {
    const datetime = new Date()

    const hour = datetime.getHours()
    const min = datetime.getMinutes()
    const sec = datetime.getSeconds()

    const angle = getAngle(hour, min, sec)

    const eventInitTicktock = new CustomEvent('initTicktock', {
        detail: {
            time : {
                hour,
                min,
                sec
            },
            angle
        }
    })

    window.dispatchEvent(eventInitTicktock)
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