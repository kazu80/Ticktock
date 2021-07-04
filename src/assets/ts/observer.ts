const observeState = (state, observeKey, callback) => {
    state.forEach((val, key, state) => {
        if (observeKey !== key) return

        let prev = undefined
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