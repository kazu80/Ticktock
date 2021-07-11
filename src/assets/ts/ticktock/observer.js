var observeState = function (state, observeKey, callback) {
    state.forEach(function (val, key, state) {
        if (observeKey !== key)
            return;
        var prev = undefined;
        setInterval(function () {
            var now = state.get(key);
            if (now !== prev) {
                callback(key, now, prev);
                prev = now;
            }
        });
    });
    return state;
};
export var observer = {
    observeState: observeState
};
//# sourceMappingURL=observer.js.map