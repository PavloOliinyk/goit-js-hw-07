const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(
  ...ingredients.map((ingredient) => {
    const ingredientsListItemRef = document.createElement('li');
    ingredientsListItemRef.textContent = ingredient;
    return ingredientsListItemRef;
  }),
);
