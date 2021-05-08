var rand;

function escoger() {
    rand = Math.floor(Math.random() * 6) + 1;


    if (rand == 1) {
        document.getElementById("myImg").src = "img/1.png";
    } else if (rand == 2) {
        document.getElementById("myImg").src = "img/2.png";
    } else if (rand == 3) {
        document.getElementById("myImg").src = "img/3.png";
    } else if (rand == 4) {
        document.getElementById("myImg").src = "img/4.png";
    } else if (rand == 5) {
        document.getElementById("myImg").src = "img/5.png";
    } else if (rand == 6) {
        document.getElementById("myImg").src = "img/6.png";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickevent() {
    for (let i = 1; i <7 ; i++) {        
        await sleep(100);
        escoger();
        }       
}
