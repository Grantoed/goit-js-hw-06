const ingredientsRef = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  liRef.classList.add("item");
  return liRef;
});

ingredientsRef.append(...elements);
