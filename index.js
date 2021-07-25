// JS шаблонные строки

// 1 Составить строку из слов и переменных `Я живу в ${country}`, вывести в консоль
/**
 *
 * @param {string} country
 * @returns string
 */
function getStringPlusVariable(country) {
    return typeof country === "string"
        ? console.log(`Я живу в ${country}`)
        : null;
}

// 2 Составить строку из переменных с названиями firstname и id в формате Ivan_39, вывести в консоль
/**
 *
 * @param {string} username
 * @param {number} id
 * @returns username_id
 */
function getUsernamePlusId(username, id) {
    return typeof username === "string" &&
        typeof id === "number" &&
        isNaN(id) === false
        ? console.log(`${username}_${id}`)
        : null;
}

// 3 Составить строки из переменных (названия переменных придумайте), значения переменных:
// London, NewYork, Minsk,
// Belorussia, USA, GreatBritain
// Формат: `${} is a capital of ${}`
/**
 *
 * @param {string} capital "London" || "NewYork" || "Minsk"
 * @param {string} country "GreatBritain" || "USA" || "Belorussia"
 * @returns capital is a capital of country
 */
function getCapitalOfTheCountry(capital, country) {
    if (typeof capital !== "string" && country !== "string") {
        return null;
    }

    if (capital === "London" && country === "GreatBritain") {
        return `${capital} is a capital of ${country}`;
    }

    if (capital === "NewYork" && country === "USA") {
        return `${capital} is a capital of ${country}`;
    }

    if (capital === "Minsk" && country === "Belorussia") {
        return `${capital} is a capital of ${country}`;
    }

    return null;
}
