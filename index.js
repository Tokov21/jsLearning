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
// const arrCopy = arr.slice(0);

// const arrCopy = [];
// Object.assign(arrCopy, arr);

const arrCopy = Object.assign(arr);

/* 
? 7. У новой копии массива удалить половину элементов (array.length/2 - 1)
*/
function deleteArrayPart() {
    let arrayPart = prompt("Какую часть массива удалить, 1 или 2?");

    if (arrayPart === "number" && !isNaN(arrayPart)) {
        check1or2(arrayPart);
    }
    alert("Вы ввели не число!");

    function check1or2(arrayPart) {
        while (arrayPart < 1 && arrayPart > 2) {
            alert("Введите число 1 или 2");
            arrayPart = prompt("Какую часть массива удалить, 1 или 2?");

            return arrayPart;
        }
    }
}

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/

/* 
? 
*/
