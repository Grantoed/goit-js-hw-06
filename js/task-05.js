const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInput = (event) => {
  event.currentTarget.value
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = "Anonymous");
};

input.addEventListener("input", onInput);
