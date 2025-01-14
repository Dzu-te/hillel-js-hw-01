// console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

const myNum = 10;
const myStr = 'some string';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = { first: 'First Name', last: 'Last Name' };

console.log('Task №1:', myNum, 'Task №1:', myStr, 'Task №1:', myBool, 'Task №1:', myArr, 'Task №1:', myObj);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */


const decimal2 = myNum.toFixed(2);
console.log('Task №2:', decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
// i

let i = 5;
console.log('Task №3:', ++i);
console.log('Task №3:', i++);
console.log('Task №3:', --i);
console.log('Task №3:', i--);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
// +=
// –=
// *=
// /=
// %=


let myTest = 20;

myTest += myNum;
myTest -= myNum;
myTest *= myNum;
myTest /= myNum;
myTest %= myNum;

console.log(myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

const myPi = Math.PI;
const myRound = Math.round(89.279);
const myRandom = Math.random(0, 10) * 10;
const myPow = Math.pow(3, 5);

console.log('Task №5:', myPi);
console.log('Task №5:', myRound);
console.log('Task №5:', myRandom.toFixed());
console.log('Task №5:', myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

const strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: "Мама мыла раму, рама мыла маму".length
};


console.log('Task №6:', strObj.str);
console.log('Task №6:', strObj.length);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama

const isRamaPos = strObj.str.indexOf('рама');
const isRama = isRamaPos !== -1;

console.log('Task №7:', isRamaPos);
console.log('Task №7:', isRama);


/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

const strReplace = strObj.str.replace('мыла', 'моет').replace('мыла', 'держит').replace('рама', 'Рама');
console.log('Task №8:', strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

const someStr = 'some STRING'
const upperStr = someStr.toUpperCase();
const lowerStr = someStr.toLowerCase();

console.log('Task №9:', upperStr);
console.log('Task №9:', lowerStr);
