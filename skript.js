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
  // Функция для генерации случайного числа в заданном диапазоне
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Функция для генерации случайной арифметической задачи
  function generateMathProblem() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    let num1, num2;

    // Генерация чисел в зависимости от оператора
    if (operator === "+") {
      num1 = getRandomNumber(1, 100);
      num2 = getRandomNumber(1, 100);
    } else if (operator === "-") {
      num1 = getRandomNumber(1, 100);
      num2 = getRandomNumber(1, num1);
    } else if (operator === "*") {
      num1 = getRandomNumber(1, 10);
      num2 = getRandomNumber(1, 10);
    } else if (operator === "/") {
      num2 = getRandomNumber(1, 10);
      num1 = num2 * getRandomNumber(1, 10);
    }

    return { num1, num2, operator };
  }

  // Функция для вычисления правильного ответа
  function calculateAnswer(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return null;
    }
  }

  // Основная функция для запуска программы
  function startMathQuiz() {
    const problem = generateMathProblem();
    const { num1, num2, operator } = problem;
    const correctAnswer = calculateAnswer(num1, num2, operator);

    const userAnswer = parseFloat(
      prompt(`Решите задачу: ${num1} ${operator} ${num2} = ?`)
    );

    if (userAnswer === correctAnswer) {
      alert("Правильно");
    } else {
      alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
    }
  }

  startMathQuiz();
}

function playgame3() {
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  let userText = prompt("Введите текст");

  console.log("Перевёрнутый текст: " + reverseString(userText));
}
function playgame4() {}
