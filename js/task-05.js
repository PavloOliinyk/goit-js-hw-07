const inputRef = document.querySelector('#name-input');
const wordLengthChangeByInputRef = document.querySelector('#name-output');

function onInputRefChange(event) {
  return inputRef.value.length >= 1
    ? (wordLengthChangeByInputRef.textContent = event.currentTarget.value)
    : (wordLengthChangeByInputRef.textContent = 'незнакомец');
}

inputRef.addEventListener('input', onInputRefChange);
