function getRandomInt(min, max) {
  min = Math.ceil(min); // округляем до ближайшего большего целого
  max = Math.floor(max); // округляем до ближайшего меньшего целого
  return Math.floor(Math.random() * (max - min + 1)) + min; // генерируем случайное целое число
}

function playgame() {
  const randomNumber = getRandomInt(1, 100);
  console.log(randomNumber);
  alert("Попробуйте угадать рандомное число");
  let num = prompt("Введите число");
  while (num != randomNumber) {
    if (num > randomNumber) {
      alert(`${num} больше загаданного`);
    } else {
      alert(`${num} меньше загаданного`);
    }
    num = prompt("Введите число");
  }
}


function playgame2() {
  function getRandomOperator() {
    return Math.random() < 0.5 ? "+" : Math.random() < 0.5 ? "-" : "*" || "/";
  }

  function getRandomNumbers() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    if (getRandomOperator() == "+") {
      return [a, b, a + b];
    } else if (getRandomOperator() == "-") {
      return [a, b, a - b];
    } else if (getRandomOperator() == "*") {
      return [a, b, a * b];
    } else {
      return [a, b, Math.round(a / b)];
    }
  }

  function checkAnswer(userInput) {
    const randomTask = getRandomNumbers();
    console.log(`${randomTask[0]} ${randomOperator} ${randomTask[1]} = `);

    if (userInput == randomTask[2]) {
      console.log("Правильно!");
    } else {
      console.log("Неверно, попробуйте ещё раз.");
    }
  }

  checkAnswer(prompt("Введите ответ"));

}