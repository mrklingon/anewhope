function deathstar () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        # # . # #
        . # # # .
        `)
    basic.pause(500)
    clear()
}
input.onButtonPressed(Button.A, function () {
    state += 1
    if (state > maxstate) {
        state = 0
    }
    if (state == 0) {
        scene1()
    }
    if (state == 1) {
        flight()
    }
    if (state == 2) {
        deathstar()
    }
})
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
    clear()
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
    clear()
}
function clear () {
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
    clear()
    landing()
}
let maxstate = 0
let state = 0
scene1()
state = 0
maxstate = 2
