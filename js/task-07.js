const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener("input", () => {
  textRef.style.fontSize = `${inputRef.value}px`;
});
