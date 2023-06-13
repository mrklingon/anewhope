let Tantavie = images.createBigImage(`
    . . . . . . . . . .
    . . . . . # . . . .
    . . . . . # # # # #
    . . . . . . . . . .
    . . . . . . . . . .
    `)
let destroyer = images.createBigImage(`
    # # . . . . . . . .
    # # # # # . . . . .
    # # # # # # # . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `)
let blank = images.createBigImage(`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    `)
Tantavie.scrollImage(-1, 200)
destroyer.scrollImage(-1, 200)
blank.scrollImage(-1, 200)
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
basic.forever(function () {
	
})
