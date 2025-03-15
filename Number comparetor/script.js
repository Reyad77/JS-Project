const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button1 = document.getElementById("reset");
const button2= document.getElementById("compare");
const display= document.getElementById("display");

button2.addEventListener('click', compare);
function compare(){
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    if (num1>num2){
        display.innerText = `${num1} is greater then ${num2}`;
    }if (num1<num2){
        display.innerText = `${num2} is greater then ${num1}`;
    }if (num1===num2){
        display.innerText = `${num2} is equals to ${num1}`;
    }
}

button1.addEventListener('click', reset);
function reset(){
    input1.value="";
    input2.value="";
    display.innerText="";
}