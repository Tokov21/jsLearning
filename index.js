let counter = 0;

const counterDiv = document.querySelector("#counter");

displayCounter();

function displayCounter() {
    let { style, classList } = counterDiv;

    counterDiv.textContent = counter;
    style.padding = "0 10px";
    style.border = "1px solid black";

    if (counter === 0) {
        classList.add("displayWhite");
    }

    if (counter >= 1) {
        classList.replace(classList[0], "displayCounterRed");
    }

    if (counter < 0) {
        classList.add(classList[0], "displayCounterRed");
    }
}

function increase() {
    counter++;

    displayCounter();
}

function decrease() {
    counter--;
    displayCounter();
}

function addNumber(num) {
    num = Number(prompt("На сколько увеличить?"));

    while (isNaN(num)) {
        num = Number(prompt("На сколько увеличить?"));
    }

    counter += num;

    displayCounter();
}

function substractNumber(num) {
    num = Number(prompt("На сколько уменьшить?"));

    while (isNaN(num)) {
        num = Number(prompt("На сколько уменьшить?"));
    }

    counter -= num;

    displayCounter();
}

function reset() {
    counter = 0;
    displayCounter();
}
