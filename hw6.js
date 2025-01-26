// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];
// console.log(people.sort((a, b) => b.age - a.age));
// function filter(array, ruleFunction) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (ruleFunction(array[i])){
//             result.push(array[i]);
//         }
        
//     }
//     return result;
// }
// function isPositive() {
//   return num > 0;
// }
// function isMale() {
//  return personalbar.gender === 'male';
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//   { name: "Глеб", gender: "male" },
//   { name: "Анна", gender: "female" },
//   { name: "Олег", gender: "male" },
//   { name: "Оксана", gender: "female" },
// ];

// console.log(filter(people, isMale));

// const intervalid = setInterval(() => {
//     console.log('Добрый вечер');
// }, 3000);

// setInterval (() => {
//     clearInterval(intervalid);
//     console.log ('Закончилось время')
// }, 7000);

// function delayForSecond(callback) {
//     setTimeout(callback, 2000);
// }

// delayForSecond(function() {
//     console.log('Hello, Angelina')
// })

// function delayForSecond(cb) {
//   setTimeout(() => {
//     console.log("Прошла одна секунда");
//     if (cb) {
//       cb();
//     }
//   }, 1000);
// }
// function sayHi(name) {
//   console.log(`Привет, ${name}`);
// }

// delayForSecond(() => sayHi('Глеб'));