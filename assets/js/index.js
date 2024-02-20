

let secondHand = document.querySelector(".second-hand");
let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");

function time() {
    const time = new Date();
    console.log(time);
    
    const seconds = time.getSeconds();
    console.log(seconds);

    const secondDegrees = ((seconds / 60) * 360) + 90;
    console.log(secondDegrees);

    const minutes = time.getMinutes();
    console.log(minutes);

    const minDegrees = ((minutes / 60) * 360) + 90;
    console.log(minDegrees);

    const hour = time.getHours();
    console.log(hour);

    const hourDegrees = ((hour / 12) * 360) + 90;
    console.log(hourDegrees);

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
}

setInterval( time, 1000);