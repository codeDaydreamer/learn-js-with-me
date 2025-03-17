const decreaseBtn = document.getElementById(`decrease`);
const resetBtn = document.getElementById(`reset`);
const increaseBtn = document.getElementById(`increase`);
const value = document.getElementById(`counter`);

let counter = 0; 

decreaseBtn.onclick = function() {
    counter--;
    value.textContent = counter;
}
increaseBtn.onclick = function() {
    counter++;
    value.textContent = counter;
}
resetBtn.onclick = function() {
    counter = 0;
    value.textContent = counter;
}