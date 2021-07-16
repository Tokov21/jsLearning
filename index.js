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
            console.log('Введите числа и оператор');
    }
    return answer;
}

// Loops:


