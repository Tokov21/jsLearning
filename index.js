// Functions:

// 1
function getString(text) {
    return "Вы ввели " + text;
}

// 2
function getSumOfTwo(num) {
    return Number(num) + 5;
}

// 3
function getConcatOfTwo(str1, str2) {
    return String(str1) + str2;
}

// 4
function getMultiOfTwo(num1, num2) {
    return Number(num1) * Number(num2);
}

// 5
function isDivisible(num1, num2) {
    return Number(num1) % Number(num2) === 0 ? true : false;
}

// 6
function raiseToThePower(base, exp) {
    return Number(Math.pow(base, exp));
}

// 7
function getArea(figure, a, b, c, p, r, l, h) {
    let S = 0;

    switch (figure) {
        case "triangle":
            S = (1 / 2) * a * h;
            break;
        case "cone":
            S = p * r * (r + l);
            break;
        case "trapezoid":
            S = (1 / 2) * (a + b) * h;
            break;
        default:
            console.log("Выберите: triangle || cone || trapezoid");
            return null;
    }
    return S;
}

// 8
function calc(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    operator = String(operator);

    let answer = 0;

    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
        default:
            console.log("Введите числа и оператор");
    }
    return answer;
}

// Functions with Loops:

// 1
function showHelloLoopMessage() {
    for (let i = 0; i < 5; i++) {
        console.log("Hello loop");
    }
}

// 2
function showLoopPlusIMessage() {
    for (let i = 1; i < 6; i++) {
        console.log("Loop " + i);
    }
}

// 3
function returnNum(num) {
    for (let i = 0; i < 5; i++) {
        console.log(Number(num));
    }
    return Number(num);
}

// 4
function multiplyNums(num1, num2) {
    let multiplied = 0;

    for (let i = 0; i < 5; i++) {
        console.log((multiplied += Number(num1) * Number(num2)));
    }
    return multiplied;
}

// 5 + 5*
function multiplyWhileLessNum(num) {
    let buffer = 1;

    for (let i = 1; i <= num; i++) {
        buffer *= i;
    }
    return buffer;
}

// 6*
function valPower(val, power) {
    let buffer = 1;

    for (let i = 1; i <= power; i++) {
        buffer *= val;
    }
    return buffer;
}
