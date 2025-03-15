let num = 0;
const display = document.getElementById("counter");
const button1 = document.getElementById("btn-1");
const button2= document.getElementById("btn-2");
const button3 = document.getElementById("reset");

button2.addEventListener('click', increase);

function increase(){
    if(num>=10){
        alert("You've reached the maximum input for the counter!")
        display.innerText=num;
        return num;
    }
    else{
        num +=1;
        display.innerText=num;
    }
}

button1.addEventListener('click', decrease);

function decrease(){
    if(num<=0){
        alert("You've reached the minimum input for the counter!")
        display.innerText=num;
        return num;
    }
    else{
        num -=1;
        display.innerText=num;
    }
}

button3.addEventListener('click', reset);

function reset(){
    num = 0;
    display.innerText=num;
}