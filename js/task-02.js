// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector("#ingredients")
const createMarkup = (ingredients) => { 
  return ingredients.map((ingredient) => {
    const liItem = document.createElement("li");
      liItem.textContent = ingredient;
      liItem.classList.add("item");
  return liItem;
  })
}
console.log(ingredients);
ulIngredients.append(...createMarkup(ingredients))