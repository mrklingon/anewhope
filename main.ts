function flight () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        `)
    for (let index = 0; index <= 2; index++) {
        led.plot(index + 2, 2 - index)
        basic.pause(200)
        led.unplot(index + 2, 2 - index)
    }
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(1, 200)
}
function landing () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        `)
    for (let index = 0; index <= 2; index++) {
        led.plot(index, index)
        basic.pause(200)
        led.unplot(index, index)
    }
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(1, 200)
}
function scene1 () {
    images.createBigImage(`
        . . . . . . # # # #
        . . . . # # # # # #
        # # # . . . . . . .
        # . . . . . . . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(1, 200)
    landing()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    flight()
})
scene1()
let state = 0
