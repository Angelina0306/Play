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
