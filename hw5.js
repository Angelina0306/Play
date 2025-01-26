let string = "js";
string = string.toUpperCase();
console.log(string);

function filter(arr, str) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

function RandomNum() {
    return Math.floor(Mathrandom() * 10) + 1;
}

console.log(RandomNum());


function generateRandomArray(n) {
  const array = [];

  for (let i = 0; i < n / 2; i++) {
    array.push(Math.floor(Math.random() * n));
  }

  return array;
}

function Randomnum(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;    
}

console.log(Randomnum(3, 7));


console.log(new Date());


const currentDate = new Date();
currentDate.setDate(currentDate.getDate()+ 73);

console.log(currentDate);


function formatDate(date) {
     const days = [
       "воскресенье",
       "понедельник",
       "вторник",
       "среда",
       "четверг",
       "пятница",
       "суббота",
     ];
      const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
        
      ];
  const year = date.getFullYear();
  const day = date.getDate();
const month = date.getMonth();
const dayOfWeek = days[date.getDay()];
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

return `
Дата : ${months[month]} ${year} -это ${dayOfWeek}
Время : ${hours} : ${minutes} : ${seconds}
`
}

console.log(formatDate(new Date()));


