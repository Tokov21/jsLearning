// Objects

// 1. Создать обьект "пользователь" - { }
// Содержит:
// свойство firstname = Vasya
// свойство age = 32
const user = {
    firstname: "Vasya",
    age: 32,
};

// 2. Создать объект "кот" - { }
// свойство длина хвоста
// метод возвращающий текст "Meow"
const cat = {
    tailLength: 10,
    sayMeow: function () {
        return "Meow";
    },
};

// 3. Создать объект "жираф" - { }
// Содержит:
// Возраст, вес, спит ли жираф, высота туловища, длина шеи,
// метод рост (возвращает сумму свойств высоты туловища и длины шеи),
// метод который разбудит или усыпит жирафа.
const giraffe = {
    age: 7,
    weight: 80,
    isSleeping: false,
    torsoHeight: 150,
    neckLength: 50,
    height: function () {
        return this.torsoHeight + this.neckLength;
    },
    sleep: function () {
        return this.isSleeping
            ? (this.isSleeping = false)
            : (this.isSleeping = true);
    },
};

// 4. Создать шаблон объекта "мотоцикл" - new Constructor()
// Содержит:
// Название модели, объем бака в литрах, модель двигателя, количество мест,
// текущая скорость, метод для увеличения скорости,
// метод для замедления скорости, метод полной остановки.
const Motorcycle = function (
    model = "",
    volOfTank = null,
    engineModel = "",
    seats = null,
    speed = null
) {
    this.model = model;
    this.volOfTank = volOfTank;
    this.engineModel = engineModel;
    this.seats = seats;
    this.speed = speed;
    this.increaseSpeed = function () {
        return (this.speed += 1);
    };
    this.decreaseSpeed = function () {
        return (this.speed -= 1);
    };
    this.engineStop = function () {
        this.speed = 0;
        return true;
    };
};

const jawa = new Motorcycle('JAWA', 5, 'JS-359', 2, 150);
