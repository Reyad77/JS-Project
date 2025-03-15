const input = document.getElementById("number");
const generate = document.getElementById("calculate");
const btn = document.getElementById("reset");
const display = document.getElementById("display");

generate.addEventListener('click', calculate);


function calculate() {
    const number = parseInt(input.value);
    if (!number) {
        alert("Please enter a number");
        return;
    }
    if (number < 0 || number > 100) {
        display.innerText = 'Invalid Number';
    } else if (number >= 80) {
        display.innerText = 'Your Grade is A+';
    } else if (number >= 70) {
        display.innerText = 'Your Grade is A';
    } else if (number >= 60) {
        display.innerText = 'Your Grade is A-';
    } else if (number >= 50) {
        display.innerText = 'Your Grade is B';
    } else if (number >= 40) {
        display.innerText = 'Your Grade is C';
    } else if (number >= 33) {
        display.innerText = 'Your Grade is D';
    } else {
        display.innerText = 'Your Grade is F, 你最学习吧!';
    }
};

btn.addEventListener('click', reset);
function reset(){
    display.innerText = '';
    input.value = '';
};

