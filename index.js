// Functions:

// 1
function getString(text) {
    return "Вы ввели " + text;
}

// 2
function calcNumPlusFive(num) {
    return typeof num === "number" ? num + 5 : null;
}

// 3
function getConcatOfTwo(str1, str2) {
    return typeof (str1 && str2) === "string" ? str1 + str2 : null;
}

// 4
function calcMultiOfTwo(num1, num2) {
    return typeof (num1 && num2) === "number" ? num1 * num2 : null;
}

// 5
function isDivisible(num1, num2) {
    return typeof (num1 && num2) === "number" ||
        typeof (num1 && num2) === "string"
        ? num1 % num2 === 0
        : false;
}

// 6
function raiseToThePower(base, exp) {
    return typeof (num1 && num2) === "number" ||
        typeof (num1 && num2) === "string"
        ? Math.pow(base, exp)
        : null;
}

// 7
function calcArea(figure) {
    let S = 0;
    const p = 3.14;

    switch (figure) {
        case "triangle":
            S = (1 / 2) * arguments[1] * arguments[2];
            break;
        case "cone":
            S = p * arguments[1] * (arguments[1] + arguments[2]);
            break;
        case "trapezoid":
            S = (1 / 2) * (arguments[1] + arguments[2]) * arguments[3];
            break;
        default:
            console.log(
                "Выберите: triangle || cone || trapezoid и введите данные для формулы через запятую!"
            );
            return null;
    }

    return isNaN(S)
        ? "Введите данные для формулы через запятую, после названия фигуры! "
        : S;
}

// 8
function calcWithOperator(num1, num2, operator) {
    if (typeof (num1 && num2 === "number") && typeof operator === "string") {
        switch (operator) {
            case "+":
                return num1 + num2;
                break;
            case "-":
                return num1 - num2;
                break;
            case "*":
                return num1 * num2;
                break;
            case "/":
                return num1 / num2;
                break;
            default:
                console.log("Введите два числа, и оператор строкой!");
        }
    } else alert("Введите два числа, и оператор строкой!");
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
function returnNumFiveTimes(num) {
    if (typeof num === "number") {
        for (let i = 0; i < 5; i++) {
            console.log(num);
        }
        return num;
    } else return null;
}

// 4
function multiplyTwoFiveTimes(num1, num2) {
    if (typeof (num1 && num2 === "number")) {
        let multiplied = 0;

        for (let i = 0; i < 5; i++) {
            multiplied += num1 * num2;
        }

        return multiplied;
    } else return null;
}

// 5 + 5*
function calcFactorial(num) {
    if (typeof num === "number") {
        let buffer = 1;

        for (let i = 1; i <= num; i++) {
            buffer *= i;
        }

        return buffer;
    } else return null;
}

// 6*
function calcPow(val, power) {
    if (typeof (val && power) === "number") {
        let buffer = 1;

        for (let i = 1; i <= power; i++) {
            buffer *= val;
        }

        return buffer;
    } else return null;
}
