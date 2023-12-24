/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First Promise Resolved")
        }, 1000)
    })

}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second Promise Resolved")
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Third Promise Resolved")
        }, 3000)
    })
}

function calculateTime() {
    let currentTime = new Date().getTime() / 1000;
    waitOneSecond().then((data) => {
        console.log(data)
        return waitTwoSecond();
    })
    .then((data) => {
        console.log(data)
        return waitThreeSecond();
    })
    .then((data) => {
        console.log(data)
        let resolvedTime =  new Date().getTime() / 1000;
        console.log(`Total time take is ${resolvedTime - currentTime} seconds`)
    })
    .catch((err) => {
        console.log(err)
    })
}


calculateTime();