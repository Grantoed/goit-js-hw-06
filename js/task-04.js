const btnAddRef = document.querySelector('[data-action="increment"]');
const btnSubRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");
let counterValue = 0;

btnAddRef.addEventListener("click", () => {
  valueRef.innerHTML = counterValue += 1;
});

btnSubRef.addEventListener("click", () => {
  valueRef.innerHTML = counterValue -= 1;
});
