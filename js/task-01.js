const listEl = document.querySelector('#categories');
const listItemEl = listEl.querySelectorAll('.item');

console.log(`В списке ${listItemEl.length} категории.`);

listItemEl.forEach((item) => {
  console.log('=========================');
  console.log('Категория:', item.querySelector('h2').textContent);
  console.log('Количество элементов:', item.querySelectorAll('li').length);
});
