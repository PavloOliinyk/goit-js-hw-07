const inputRef = document.querySelector('#validation-input');

function onInputRefChange() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    return;
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
    return;
  }

  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
}

inputRef.addEventListener('blur', onInputRefChange);
