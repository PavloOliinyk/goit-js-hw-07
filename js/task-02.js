const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = ingredient;
  listEl.appendChild(listItemEl);
});
