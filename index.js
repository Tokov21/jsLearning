/*
! spread
*/
function arrayCopy(array) {
    const newArr = [...array];

    return newArr;
}

console.log(arrayCopy([1, 2, 3, 4, 5]));

function concatTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(concatTwoArrays([1, "sas", 3], [1, 2, 3]));

function concatTwoObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(
    concatTwoObjects(
        { test: 123, sas: "less", 7: 231 },
        { 1: 123, 2: "sas", 3: "sas" }
    )
);

function arrayPlusArrays(array, ...arrays) {
    const arr = [];

    for (let i = 0; i < arrays.length; i++) {
        arr.push(...arrays[i]);
    }

    arr.forEach((v, index) => {
        if (typeof v === "object") {
            const v1 = { ...v };
            arr.push(v1);
            // arr.splice(index, 1, console.log(v1));
        }
    });

    return [...array, ...arr];
}

console.log(
    arrayPlusArrays(
        [1, 2, 3],
        ["obj", 2],
        [4, { 12: "test" }, 6],
        ["typo", "test"]
    )
);

/*
! rest
*/
function arrFromArgs(...array) {
    const newArr = [...array];

    return newArr;
}

console.log(arrFromArgs(1, 2, 3, 4, 5));

function deleteOnIndex(deleteIndex, array, ...cells) {
    const value = array.splice(deleteIndex, 1, ...cells);
    

    return value;
}

console.log(deleteOnIndex(3, [1, 2, 3, 4, 5], 1, "sas", 656, 53));
