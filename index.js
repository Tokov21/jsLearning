// 1
function getMaxNum(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2) && num1 > num2) {
        return Number(num1);
    } else {
        if (num1 === num2) {
            return "Числа одинаковые!";
        } else {
            return Number(num2);
        }
    }
}

getMaxNum(num1, num2);

// 2
function getMinNum(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2) && num1 < num2) {
        return Number(num1);
    } else {
        if (num1 === num2) {
            return "Числа одинаковые!";
        } else {
            return Number(num2);
        }
    }
}

getMinNum(num1, num2);

// 3
function checkNumIsEven(num1) {
    if (!isNaN(num1) && num1 % 2 === 0) {
        return "Число чётное!";
    } else if (isNaN(num1)) {
        return "Заданное значение не число!";
    } else {
        return "Число нечётное!";
    }
}

even(Number(num1));

// 4 b^2 - 4*a*c
function getDiscriminant(b, a, c) {
    if (!isNaN(b, a, c)) {
        return Number(b) ** 2 - 4 * Number(a) * Number(c);
    } else {
        return null;
    }
}

getDiscriminant(b, a, c);
