let Blau = 0
let grün = 0
let Rot = 0
let strip = neopixel.create(DigitalPin.P2, 60, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -300) {
        Rot = 0
        grün = 200
        Blau = 0
    } else if (input.acceleration(Dimension.X) > 300) {
        Rot = 0
        grün = 0
        Blau = 200
    } else {
        Rot = 255
        grün = 0
        Blau = 0
    }
})
basic.forever(function () {
    strip.showColor(neopixel.rgb(Rot, grün, Blau))
    strip.show()
})
