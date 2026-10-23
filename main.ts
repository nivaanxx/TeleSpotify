radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
let potato = 0
potato = 0
radio.setGroup(1)
basic.forever(function () {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (potato < 0) {
        basic.clearScreen()
    }
    if (potato == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
})
