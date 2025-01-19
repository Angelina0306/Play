// function num(a,b) {
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }
// console.log(num(4, 4));

// function res(n) {
//   if (n % 2 ==0) {
//     console.log ("Четное")
//   } else {
//     console.log ("Нечетное")
//   }
// }
// res(7);

// function squ(a) {
//   return a * a;
// }
// console.log(squ(3));

// function fromsqu(b) {
//   return Math.sqrt(b);
// }
// console.log(fromsqu(16));

// function howold() {
//   const age = prompt("Сколько вам лет?");
//   if (age < 0) {
//     console.log("Вы ввели неправильное значение");
//   } else if (age > 0 && age < 12) {
//     console.log("Привет, друг!");
//   } else if (age >= 13) {
//     console.log("Добро пожаловать");
//   }
// }
//  howold ()
// function multiply(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     if (!isNaN(a) && !isNaN(b)) {
//       return a * b;
//     } else {
//       console.log("Одно или оба значения не являются числом");
//     }
//   } else {
//     console.log("Одно или оба значения не являются числом");
//   }
// }

// function cubeNumber() {
//   let userInput = Number(prompt("Введите число"));

//   if (isNaN(userInput)) {
//     return "Переданный параметр не является числом";
//   } else {
//     let cubeResult = userInput * userInput * userInput;
//     return `n в кубе равняется ${cubeResult}`;
//   }
// }

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius * this.radius;
// };

// Circle.prototype.getPerimeter = function () {
//   return 2 * Math.PI * this.radius;
// };

// let circle1 = new Circle(5);
// let circle2 = new Circle(7);

// console.log("Площадь первого круга: " + circle1.getArea());
// console.log("Периметр первого круга: " + circle1.getPerimeter());

// console.log("\nПлощадь второго круга: " + circle2.getArea());
// console.log("Периметр второго круга: " + circle2.getPerimeter());

