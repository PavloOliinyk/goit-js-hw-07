const currentValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);
let counterValue = 0;

function onDecrementBtnRefClick() {
  counterValue -= 1;
  currentValueRef.textContent = counterValue;
}

function onIncrementBtnRefClick() {
  counterValue += 1;
  currentValueRef.textContent = counterValue;
}

incrementBtnRef.addEventListener('click', onIncrementBtnRefClick);
decrementBtnRef.addEventListener('click', onDecrementBtnRefClick);
