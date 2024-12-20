a = 10;
alert(a);
b = 20;
alert(b);
c = "Год выпуска первого Iphone 2007";
alert(c);
d = "Брендан Эйх создатель Java Skrip";
alert(d);

let f = 10;
let e = 2;
alert(f + e);
alert(f - e);
alert(f / e);
alert(f * e);

let result = 2 ** 5;
alert(result);

let ab = 9;
let bc = 2;
console.log(ab % bc);
 
let age = prompt(
 "Сколько вам лет?", 18);
alert(age);

let user = {
  name: "Амина",
  age1: 2,
  isAdmin: true,
};


console.log(`Привет, ${name}!`);


let num = 1;
num += 5;
num -=  3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let password = "7580";
let result1 = prompt("Введите пароль", "");
if (result1 == password) alert("Пароль введён верно");
else alert("Пароль введен неправильно");


let ci = 5;
if (ci > 0 && ci < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

let dc = 7 ;
let ef = 111;

if (dc > 100 || ef > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

let h = "2";
let g = "3";
alert(Number(h) + Number(g));

let monthNumber = 12;
switch (monthNumber) {
  case 1:
    alert("Зима");
    break;
  case 2:
    alert("Зима");
    break;
  case 3:
    alert("Весна");
    break;
  case 4:
    alert("Весна");
    break;
  case 5:
    alert("Весна");
    break;
  case 6:
    alert("Лето");
    break;
  case 7:
    alert("Лето");
    break;
  case 8:
    alert("Лето");
    break;
  case 9:
    alert("Осень");
    break;
  case 10:
    alert("Осень");
    break;
  case 11:
    alert("Осень");
    break;
  case 12:
    alert("Зима");
    break;

  default:
    alert("Введен неверный месяц");
    break;
}

let i = 0;
while (i < 2) {
  console.log("привет");
  i++;
}


let j = 1, n = 5;
while (j <= n) {
  console.log(j);
  j ++;
}

let k = 7,
  n = 22;
while (k <= n) {
  console.log(k);
  k++;
}


