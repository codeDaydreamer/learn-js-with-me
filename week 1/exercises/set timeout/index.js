// setTimeout(callback, delay)
// clearTimeout(timeoutId)
// 


function sayHello (){
    window.alert(`Hello there stranger`);
}

//const timeoutId = setTimeout(sayHello, 4000);

// clearTimeout(timeoutId);

//setTimeout(() => window.alert(`Hello user`), 5000);

let timeoutId;

function startTimer(){

     timeoutId = setTimeout(() => window.alert(`Hello user`), 4000);
     console.log(`Started`);

}

function clearTimer(){

    clearTimeout(timeoutId);
    console.log(`Stopped`);

}

