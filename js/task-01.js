const listEl = document.querySelector('#categories');
const listItemEl = listEl.querySelectorAll('.item');

console.log(`В списке ${listItemEl.length} категории.`);

function findCategories(listItemEl) {
  listItemEl.forEach((elem) => {
    console.log('Категория:', elem.querySelector('h2').textContent);
    console.log('Количество элементов:', elem.querySelectorAll('li').length);
  });
}

findCategories(listItemEl);
