let counter = 0;
let limit = 35;
let numberChange = 5;

const sumButton = document.getElementById('increment');
const minButton = document.getElementById('decrement');
const counterElement = document.getElementById("counter");
const containerElement = document.getElementById("container");
counterElement.textContent = counter;

let BOOM = document.createElement("p");
BOOM.textContent = "!bOoMm!";
BOOM.style = "background-color: purple; color: white; padding: 5px;";

const counterChange = (number) => {
    const counterElementValueAsNumber = Number(counterElement.textContent);
    const newNum = counterElementValueAsNumber + number;
    counterElement.textContent = newNum;
    if(newNum > limit || newNum < -limit ){ 
        containerElement.appendChild(BOOM);
    };
};

increment.onclick = () => {
    counterChange(numberChange);
};
decrement.onclick = () => {
    counterChange(-numberChange);
}



