const inputRef = document.querySelector('#validation-input');

function onInputRefChange() {
  if (inputRef.value.length >= inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else if (
    inputRef.value.length >= 1 &&
    inputRef.value.length < inputRef.dataset.length
  ) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  }
}

inputRef.addEventListener('blur', onInputRefChange);
