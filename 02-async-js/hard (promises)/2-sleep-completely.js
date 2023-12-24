/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const { resolve } = require("path");

function sleep (seconds) {

    return new Promise((resolve) => {
        setTimeout(resolve, seconds* 1000)
    })
}


sleep(5).then((res) => {
    console.log(res)
})

console.log("fafafaf")