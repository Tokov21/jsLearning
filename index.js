/*
 * Arrays
 */

/* 
? 1. Создать пустой массив, ноль ячеек, добавить в него цифры от 1 до 10 (push)
*/
const arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

/* 
? 2. Добавить в начало массива 0
*/
arr.unshift(0);

/* 
? 3. Удалить 1 элемент с конца массива, и 1 элемент с начала
*/
arr.pop();
arr.shift();

/* 
? 4. Удалить 1 элемент где нибудь в середине (splice)
*/
arr.splice(4, 1);

/* 
? 5. Добавить на его место в середине цифру 5 (splice)
*/
arr.splice(4, 0, 5);

/* 
? 6. Копировать или клонировать весь массив (slice или Object.assign)
*/
// * Вариант 1
// const arrCopy = arr.slice(0);

// * Вариант 2
const arrCopy = Object.assign([], arr);

// * Вариант 3
// const arrCopy = [];
// Object.assign(arrCopy, arr);

// * Вариант 4
// ! Та же ссылка (область памяти) в оперативной памяти
// const arrCopy = Object.assign(arr);

/* 
? 7. У новой копии массива удалить половину элементов (array.length/2 - 1)
*/
function deletePartOfArrCopy() {
    let arrayPart = Number(
        prompt("Какую половину массива удалить, 1ю или 2ю?")
    );
    let arrCopyLength = arrCopy.length;

    while (arrayPart !== 1 && arrayPart !== 2 && isNaN(arrayPart)) {
        arrayPart = Number(
            prompt("Какую половину массива удалить, введите 1 или 2?")
        );
    }

    if (arrayPart === 1) {
        for (let i = 0; i < arrCopyLength / 2; i++) {
            arrCopy.shift();
        }
    }

    if (arrayPart === 2) {
        for (let i = 0; i < arrCopyLength / 2; i++) {
            arrCopy.pop();
        }
    }

    return arrCopy;
}

/* 
? 8. Создать пустой массив, 8 ячеек + 9 задание
*/
const newArr = Array(8);

// const newArr = Array(8).fill(0, 0, 4);

/* 
? 9. Заполнить массив с начала до половины нулями (fill)
*/
newArr.fill(0, 0, newArr.length / 2);

/* 
? 10. Отфильтровать от пустых ячеек (forEach+push / filter)
*/
const filteredArr = newArr.filter((value) => value !== undefined);

const forEachArr = [];
newArr.forEach((value) => forEachArr.push(value));

/* 
? 11. Создать массив, 10 ячеек, числа от 1 до 10.
? На основе него создать массив квадратов значений (map).
*/
const arrTenNumbers = [];

for (let i = 1; i < 11; i++) {
    arrTenNumbers.push(i);
}

const arrSquareTenNumbers = arrTenNumbers.map((number) => number * number);

/* 
? 12. Перевести массив в строку, с разделителем "&&" (join)
*/
const strSquare = arrSquareTenNumbers.join(" && ");

/* 
? 13. Создать массив продуктов, 3-5 элементов. Каждый продукт имеет свойства - наименование, цена, осталось ли на складе, колво на складе.
*/
const products = [
    { id: 1, name: "apple", price: 10, isInStock: true, amount: 3 },
    { id: 2, name: "juice", price: 30, isInStock: false, amount: 0 },
    { id: 3, name: "onion", price: 5, isInStock: true, amount: 300 },
    { id: 4, name: "carrot", price: 3, isInStock: true, amount: 250 },
    { id: 5, name: "orange", price: 20, isInStock: false, amount: 0 },
];

/* 
? 14. Отфильтровать массив продуктов по тому есть ли они на складе. Потом по количеству на складе больше 5 шт. (filter().filter())
*/
const filteredProducts = products
    .filter((value) => value.isInStock === true)
    .filter((value) => value.amount > 5);

/* 
? 15. Создать массив Корзина.
? Спрашивать у пользователя ид (индекс продукта) через prompt который он хочет положить в корзину.
? _Клонировать_ в корзину обьект продукта по индексу выбранному пользователем.
*/
const basket = [];

function addToBasket() {
    let userProduct = Number(
        prompt("Введите номер товара (1 - 5), чтобы добавить его в корзину")
    );

    while (userProduct < 1 || userProduct > 5 || isNaN(userProduct)) {
        userProduct = Number(
            prompt(
                "Вы ввели неправильный номер продукта, введите номер от 1 до 5"
            )
        );
    }

    basket.push(JSON.parse(JSON.stringify(products[userProduct])));

    return basket;
}

/* 
? 16. Создать _шаблон_ обьекта Пользователь.
? Принимать параметры - username, age, isMale, password.
*/
const User = function (
    username = null,
    age = null,
    isMale = null,
    password = null
) {
    this.username = username;
    this.age = age;
    this.isMale = isMale;
    this.password = password;
};

/* 
? 17. В цикле (for или map) создать 5 пользователей (new User) и поместить их в массив users.
? Имена, возрасты, пол, и пароль пусть зависят от индекса ("username1", "username2" ...).
*/

// In progress..

// const users = Array(5).fill([Array(5)].map((value, index) => (value[index] = new User())));
