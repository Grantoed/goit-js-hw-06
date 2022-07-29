// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

// -------------------------------------------------------------------------------------------------------------------------------

// const inputRef = document.querySelector('[type="number"]');
// const btnCreate = document.querySelector("[data-create]");
// const btnDestroy = document.querySelector("[data-destroy]");
// const boxesRef = document.querySelector("#boxes");

// btnCreate.addEventListener("click", createBoxes);

// function createBoxes(amount) {
//   const markup = `<div class="newbox"></div>`;

//   boxesRef.insertAdjacentHTML("beforeend", markup);
//   const newBox = boxesRef.children[boxesRef.children.length - 1];

//   newBox.style.width = "30px";
//   newBox.style.height = "30px";
//   newBox.style.backgroundColor = getRandomHexColor();
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// inputRef.addEventListener("input", (event) => {
//   const inputValue = event.currentTarget.value;
//   return inputValue;
// });

// -----------------------------------------------------------------------------------------------------------------------

const btnCreate = document.querySelector("[data-create]");

btnCreate.addEventListener("click", (e) => {
  const inputValue = document.querySelector('[type="number"]').value;
  render(inputValue);
});

function render(amount) {
  for (let i = 0; i < amount; i++) {
    createEl();
  }
}

function createEl() {
  const parent = document.querySelector("#boxes");
  const div = document.createElement("div");
  div.className = "new-div";
  div.style.width = "30px";
  div.style.height = "30px";
  div.style.border = "1px solid #000";
  div.style.background = getRandomColor();
  parent.append(div);
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(0, 16)}`;
}
