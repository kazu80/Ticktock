import { ticktock } from "./ticktock";
window.addEventListener('load', function (event) {
    var hourHand = document.getElementById('hour');
    var minuteHand = document.getElementById('minute');
    var secondHand = document.getElementById('second');
    if (!hourHand || !minuteHand || !secondHand) {
        throw new Error('not find element');
    }
    window.addEventListener('ticktock-1000', (function (e) {
        var angle = e.detail.angle;
        var degHour = angle.hour + "deg";
        var degMinute = angle.min + "deg";
        var degSecond = angle.sec + "deg";
        hourHand.style.transform = "translate(-50%, -100%) rotate(" + degHour + ")";
        minuteHand.style.transform = "translate(-50%, -100%) rotate(" + degMinute + ")";
        secondHand.style.transform = "translate(-50%, -100%) rotate(" + degSecond + ")";
    }));
    ticktock().start();
});
//# sourceMappingURL=main.js.map