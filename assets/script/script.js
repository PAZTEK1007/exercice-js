let firstTime = Date.now();

function timer (){
    let actualTime = Date.now();
    let timeout = actualTime - firstTime;
    let secondTimeout = Math.floor((timeout % 60000) / 1000);
    let minuteTimeout = Math.floor(timeout / 60000);

    let message;
    if (secondTimeout === 1){
        message = "a second has passed !";
    } else if (minuteTimeout === 1){
        message = "a minute " + "and" + secondTimeout + " has passed !";
    } else if (secondTimeout < 60 ){
        message = secondTimeout + " seconds have passed !";
    } else if (minuteTimeout < 60){
        message = minuteTimeout + " minutes have passed ! " + secondTimeout + " seconds !";
    }
    document.getElementById("timer").textContent = message;
}

setInterval(timer, 1000);