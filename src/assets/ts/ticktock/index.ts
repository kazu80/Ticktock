import {adjustMillisecond, cbChangeStartValue} from "./processing";
import {observer} from "./observer";
import state from "./state";

export const ticktock = () => {
    observer.observeState(state, 'start', cbChangeStartValue)

    return {
        start,
        stop
    }
};

const start = async () => {
    await adjustMillisecond()
    state.set('start', true)
}

const stop = () => {
    state.set('start', false)
}