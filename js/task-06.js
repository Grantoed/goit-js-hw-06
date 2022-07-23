const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length < inputRef.getAttribute("data-length")) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.replace("invalid", "valid");
  }
});
