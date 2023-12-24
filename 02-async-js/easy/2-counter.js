
let time = 0
let counter = () => {
    console.log(time);
    time += 1
    setTimeout(counter, 1000);
}

counter();