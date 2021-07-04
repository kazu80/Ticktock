import {observer} from "./observer";
import state from "./state";

export const ticktock = () => {
    observer.observeState(state, 'start', cbChangeStartValue)

    return {
        start,
        stop
    }
};

const start = () => {
    adjustMillisecond()
}

const stop = () => {
    state.set('start', false)
}

const cbChangeStartValue = (key: string, val: boolean, prev: boolean) => {
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

const adjustMillisecond = () => {
    const adjustMsecIntervalID = setInterval(() => {
        const msec = Date.now()
        if (msec % 1000 < 100) {
            clearInterval(adjustMsecIntervalID)
            state.set('start', true)
        }
    })
}

const getDatetime = () => {
    const datetime = new Date()

    const hour = datetime.getHours()
    const min = datetime.getMinutes()
    const sec = datetime.getSeconds()

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

    const eventInitTicktock = new CustomEvent('initTicktock', {
        detail: {
            time : {
                hour,
                min,
                sec
            },
            angle : {
                hour: degHour,
                min: degMinute,
                sec: degSecond
            }
        }
    })

    window.dispatchEvent(eventInitTicktock)
}