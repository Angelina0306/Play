const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

console.log(
  people.sort((a, b) => {
    if (a.age < b.age) {
      return -1; 
    } else if (a.age > b.age) {
      return 1; 
    } else {
      return 0; 
    }
  })
);

function isPositive(num) {
  return num > 0;
}
function isMale(person) {
  return person.gender === "male";
}

function filter(arr, ruleFunction) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people1, isMale));

let intervalId;
let timeoutId;

function printCurrentDate() {
  const currentDate = new Date();
  console.log(currentDate);
}

intervalId = setInterval(printCurrentDate, 3000);

timeoutId = setTimeout(() => {
  clearInterval(intervalId);
  console.log("30 секунд прошло");
}, 30000);

function delayForSecond(callback) {
  setTimeout(callback, 2000);
}

delayForSecond(function () {
  console.log("Hello, Angelina");
});

function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}
function sayHi(name) {
  console.log(`Привет, ${name}`);
}

delayForSecond(() => sayHi('Глеб'));