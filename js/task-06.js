const inputRef = document.querySelector("#validation-input");
const requiredInputLength = Number(inputRef.getAttribute("data-length"));

// inputRef.addEventListener("blur", () => {
//   if (
//     inputRef.value.length < inputRef.getAttribute("data-length") ||
//     inputRef.value.length > inputRef.getAttribute("data-length")
//   ) {
//     inputRef.classList.add("invalid");
//   } else {
//     inputRef.classList.replace("invalid", "valid");
//   }
// });

inputRef.addEventListener("blur", () => {
  const inputLength = inputRef.value.length;

  if (inputLength !== requiredInputLength) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.replace("invalid", "valid");
  }
});
