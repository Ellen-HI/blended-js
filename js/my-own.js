//Завдання: Напиши сценарій, який знайде мінімальне, максимальне значення массиву, а також виведе суму всіх елементів массиву.

// function numberAll(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     sum += arr[i];
//   }
//   return { min, max, sum };
// }
// console.log(numberAll([4, 6, 1, 3, 7, 9, 3]));

// Напишіть сценарій, який знайде в массиві всі від'ємні значення та замінить їх на значення 0.Після цього виведіть всі значення массиву.

// function arrayNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = 0;
//     }
//   }
//   return arr;
// }
// console.log(arrayNumbers([5, -6, 2, 4, -7, -9]));

//Знайти середнє значення масиву. Дано масив чисел.
// знайти середнє значення всіх елементів.

// function array(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(array([2, 3, 5, 7, 1]));

// Знайти найбільше парне число

// Дано масив чисел.
// Завдання: знайти найбільше число, яке є парним.

// function numberArr(array) {
//   let even = array.filter(num => num % 2 === 0);
//   return Math.max(...even);
// }
// console.log(numberArr([2, 5, 1, 6, 8, 9]));

// 3️⃣ Розвернути масив без reverse()

// Дано масив чисел або рядків.
// Завдання: створити новий масив, у якому елементи йдуть у зворотному порядку без використання методу reverse().

// function mix(array) {
//   let reversed = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     reversed.push(array[i]);
//   }
//   return reversed;
// }

// console.log(mix([3, 5, 7, 1, 8, 2]));

// 4️⃣ Видалити всі дублікати

// Дано масив чисел або рядків.
// Завдання: створити новий масив, у якому кожен елемент зустрічається тільки один раз.

// function mixed(array) {
//   return [...new Set(array)];
// }

// console.log(mixed([1, 2, 1, 3, 2]));

//------------------------------------------------------this--------------------------------------------//

// const user = {
//   name: 'Peter',
//   sayName() {
//     return this.name;
//   },
// };
// console.log(user.sayName());

// Створи об’єкт person з властивостями:
// name
// age
// Додай метод showInfo(), який виводить: Мене звати Ім'я, мені Вік років

// const person = {
//   name: 'Alice',
//   age: 20,
//   showInfo() {
//     return `My name is ${this.name}, my age ${this.age}`;
//   },
// };
// console.log(person.showInfo());

// 3️⃣ Калькулятор
// Створи об’єкт calculator з властивостями:
// a
// b
// І методами:
// sum() → повертає суму
// multiply() → повертає добуток
// Обидва повинні використовувати this.
// const calculator = {
//   a: 3,
//   b: 5,
//   sum() {
//     return this.a + this.b;
//   },
//   multiply() {
//     return this.a * this.b;
//   },
// };
// console.log(calculator.sum());
// console.log(calculator.multiply());

// 4️⃣ Лічильник
// Створи об’єкт counter:
// Властивість:
// count = 0
// Методи:
// increase() → збільшує count
// decrease() → зменшує count
// show() → показує значення
// Використай this.count.
// const counter = {
//   count: 0,
//   increase() {
//     return this.count++;
//   },
//   decrease() {
//     return this.count--;
//   },
//   show() {
//     return this.count;
//   },
// };
// console.log(counter.increase());
// console.log(counter.increase());
// console.log(counter.show());
