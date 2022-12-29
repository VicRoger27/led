input.onButtonPressed(Button.A, function () {
    DELAY += 100
})
input.onButtonPressed(Button.B, function () {
    DELAY += -100
    if (DELAY < -100) {
        DELAY = -100
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    DELAY = 500
})
let DELAY = 0
DELAY = -100
basic.forever(function () {
    if (DELAY >= 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(DELAY)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(DELAY)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(DELAY)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(DELAY)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
