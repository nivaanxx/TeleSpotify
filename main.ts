radio.onReceivedNumber(function (receivedNumber) {
    Spotify = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    Spotify = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (Spotify > 0) {
        radio.sendNumber(Spotify)
        Spotify = -1
    }
})
let Spotify = 0
Spotify = 0
radio.setGroup(1)
basic.forever(function () {
    if (Spotify == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (Spotify < 0) {
        basic.clearScreen()
    }
    if (Spotify == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
})
