// using the fisher-yates algorithm

const cards = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, `J`, `Q`, `K`];

shuffle(cards);

console.log(cards);

function shuffle (array){

    for (i = array.length - 1; i > 0; i-- ){
        const random = Math.floor(Math.random() * (i + 1));

        [array[1], array[random]] =  [array[random],  array[1]];

    }
}