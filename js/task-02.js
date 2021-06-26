const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

listEl.append(
  ...ingredients.map((ingredient) => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    return listItemEl;
  }),
);
