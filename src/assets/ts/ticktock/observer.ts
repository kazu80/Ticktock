type ObserverCallback = (key: string, now: any, prev: any) => void

const observeState = (state: Map<string, any>, observeKey: string, callback: ObserverCallback) => {
    state.forEach((val: any, key: string, state) => {
        if (observeKey !== key) return

        let prev: any = undefined
        setInterval(() => {
            const now = state.get(key)
            if (now !== prev) {
                callback(key, now, prev)
                prev = now
            }
        })
    })

    return state
}

export const observer = {
    observeState
}