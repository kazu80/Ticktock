# Ticktock.web.js

## Features
I created a module that makes it easy to make a clock. Introduction We aimed to make analog clocks easy on the Web.

## Installation

```bash
npm install ticktock.web.js
```

## Usage

First, prepare the HTML of the analog clock. Sample HTML is available, so if you want to use the sample, please check "[src/index.html](src/index.html)".
An analog clock is a 360-degree round clock that has an hour hand, a minute hand, and a second hand.

Add the following JS to this HTML

```typescript
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
```

After importing this module, if you execute start for ticktock, a custom event called "ticktock-1000" will be fired every second.
The "ticktock-1000" event contains the angles that the hour, minute, and second hands point to from the center of the clock, so give that value to each CSS.

## Special features
The timing of the custom event is set so that it does not deviate from the device's built-in clock by 100 ms or more.


## Method
Currently, the only methods available are "start" and "stop".
- Running start will cause the custom event to fire
- Executing stop will stop the custom event

## Roadmap
I am thinking of the following updates in the future
- Updates for digital clocks
- Update for timer
- Schedule function

## Note

Doesn't work hot reload.

