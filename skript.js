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
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateMathProblem() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    let num1, num2;

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

  alert("Перевёрнутый текст: " + reverseString(userText));
}
function playgame4() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  let score = 0;
  quiz.forEach((item) => {
    const userAnswer = prompt(`${item.question}\n${item.options.join("\n")}`);

    if (parseInt(userAnswer) === item.correctAnswer) {
      score++;
    }
  });

  alert(`Вы ответили правильно на ${score} вопрос(ов) из ${quiz.length}.`);
}

function playgame5() {
  function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      return "Вы победили!";
    } else {
      return "Вы проиграли!";
    }
  }

  let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

  while (
    userChoice !== "камень" &&
    userChoice !== "ножницы" &&
    userChoice !== "бумага"
  ) {
    userChoice = prompt(
      "Неверный ввод. Выберите: камень, ножницы или бумага"
    ).toLowerCase();
  }

  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  alert(
    `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`
  );
}

// function playgame6() {
//   const button1 = document.querySelector(".play__btn");

//   button1.addEventListener("click", function () {
//     function getRandomColor() {
//       var letters = "0123456789ABCDEF";
//       var color = "#";
//       for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//     }
//     document.body.style.backgroundColor = getRandomColor();
//   });
// }
