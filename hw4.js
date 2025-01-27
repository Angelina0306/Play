// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] === 10) {
//     break;
//   }
// }

// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] === 4) {
//     break;
//   }
// }

// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

// const arr = [];

// for (let i = 0; i < 3; i++) {
//   const arr2 = [];
//   for (let i = 0; i < 3; i++) {
//     arr2.push(1);
//   }
//   arr.push(arr2);
// }

// console.log(arr);

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);

// let arr = [9, 8, 7, "a", 6, 5];
// arr.sort();
// arr = arr.filter((item) => typeof item === "number");
// console.log(arr);

// let array = [9, 8, 7, 6, 5];

// let userGuess = prompt("Попробуйте угадать число!");

// if (array.includes(userGuess)) {
//   alert("Угадал!");
// } else {
//   alert("Не угадал.");
// }

// let s = "abcdef";
// s = s.split("");
// console.log(s);
// s.reverse();
// s = s.join("");
// console.log(s);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let resultArray = [...array1, ...array2];

// console.log(resultArray);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i + 1]) {
//     console.log(arr[i] + arr[i + 1]);
//   }
// }

// function q(arr) {
// return arr.map(item => item **2);
// }
// console.log(q([1, 2, 3]));

// function yLength(arr) {
//   return arr.map((item) => item.length);
// }
// console.log(['banan']);

// function negative(arr) {
//   return arr.filter(item => item < 0);
// }
//   console.log(negative([1, -3, 4, -7, 8])) ;

// const originalArray = [];
// for (let i = 0; i < 10; i++) {
//   originalArray.push(Math.floor(Math.random() * 11));
// }

// console.log("Исходный массив:", originalArray);

// for (let num of originalArray) {
//   if (num % 2 === 0) {
//     evenValuesArray.push(num);
//   }
// }
// console.log("Массив с чётными значениями:", evenValuesArray);

// const numbersArray = [];
// for (let i = 0; i < 6; i++) {
//   numbersArray.push(Math.floor(Math.random() * 10) + 1);
// }

// let sum = numbersArray.reduce((a, b) => a + b, 0);
// const average = sum / numbersArray.length;

// console.log("Среднее арифметическое:", average);
