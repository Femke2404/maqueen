let strip: neopixel.Strip = null
let IR_waarde = 0
let vooruit = 133
let rechts = 197
let achteruit = 5
let links = 69
let stop = 91
IR.IR_init()
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
basic.forever(function () {
    if (IR_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (IR_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 145)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 145)
        basic.pause(399)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (IR_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (IR_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 145)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 145)
        basic.pause(399)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (IR_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorStop(maqueen.Motors.M1)
    }
})
