// Closures in JavaScript are a feature where an inner function has access to the variables of its outer function, 
// even after the outer function has finished executing.
// Key Characteristics of Closures:
//                  Access to Outer Function's Variables – The inner function can access variables from its outer (enclosing) function.
                    //Preserving Data – The outer function’s variables are "remembered" even after the function execution is complete.

//                  Encapsulation – Closures help in creating private variables that can't be accessed from outside.



function createCounter (){

    let count = 0;

    function increment() {

    
        count ++;
        console.log(`Count increased to ${count}`);

    }
  
   

    function getCount(){
        return count;
    }

    return {increment, getCount};

}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`Current count is : ${counter.getCount()}`);


function createGame (){


let score = 0;

function increaseScore(points){

    score += points;
    console.log(` + ${points} pts`);

}

function decreaseScore(points){

    score -= points;
    console.log(` - ${points} pts`);

}

function getScore () {
    return score;
}

return {increaseScore, decreaseScore, getScore};

}

const game = createGame();

game.increaseScore(2);
game.increaseScore(4);
console.log(`Total score is : ${game.getScore()}`);

