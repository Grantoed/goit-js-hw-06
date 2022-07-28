// const itemsRef = document.querySelectorAll(".item");
// const categoriesNamesRef = document.querySelectorAll(".item h2");
// const ulRef = document.querySelectorAll("#categories ul");

// const getNumberOfCategories = () => {
//   console.log(`Number of categories: ${itemsRef.length}`);
// };

// const getNumberOfElements = () => {
//   const numberOfElements = [];
//   for (let i = 0; i < ulRef.length; i += 1) {
//     numberOfElements.push(ulRef[i].children.length);
//   }
//   return numberOfElements;
// };

// const getCategoryInfo = () => {
//   categoriesNamesRef.forEach((category, index) => {
//     console.log(`Category: ${category.textContent}`);
//     console.log(`Elements: ${getNumberOfElements()[index]}`);
//   });
// };

// getNumberOfCategories();
// getCategoryInfo();

const ulRef = document.querySelector("#categories");

function countCategories() {
  console.log(`Number of categories: ${ulRef.children.length}`);
}

function getCategoryInfo() {
  for (const category of ulRef.children) {
    const titleRef = category.querySelector("h2");
    const elemListRef = category.querySelector("ul");
    console.log(`Category: ${titleRef.textContent}`);
    console.log(`Elements: ${elemListRef.children.length}`);
  }
}

countCategories();
getCategoryInfo();
