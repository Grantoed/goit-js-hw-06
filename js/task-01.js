// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const itemsRef = document.querySelectorAll(".item");
const categoriesNamesRef = document.querySelectorAll(".item h2");
const elementsRef = document.querySelectorAll(".item li");
const ulRef = document.querySelectorAll("#categories ul");

const getNumberOfCategories = () => {
  console.log(`Number of categories: ${itemsRef.length}`);
};

const getNumberOfElements = () => {
  const numberOfElements = [];
  for (let i = 0; i < ulRef.length; i += 1) {
    numberOfElements.push(ulRef[i].children.length);
  }
  return numberOfElements;
};

const getCategoryInfo = () => {
  categoriesNamesRef.forEach((category, index) => {
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${getNumberOfElements()[index]}`);
  });
};

getNumberOfCategories();
getCategoryInfo();
getNumberOfElements();
