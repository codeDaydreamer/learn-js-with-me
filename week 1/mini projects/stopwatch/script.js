
const display = document.getElementById(`display`);
let timer = null;

let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start (){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(setInterval, 10);
        isRunning = true;

    }
    console.log(startTime);

}

function stop (){
    
}

function reset (){
    
}

function update (){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    


}