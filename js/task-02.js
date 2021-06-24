const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');
console.log(listEl);

function addListItemEl(ingredients) {
  ingredients.forEach((element) => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = element;
    listEl.appendChild(listItemEl);
  });
}

addListItemEl(ingredients);
