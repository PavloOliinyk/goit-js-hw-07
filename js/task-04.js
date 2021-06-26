const counterValue = document.querySelector('#value');
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]',
);

incrementBtnEl.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
decrementBtnEl.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});
