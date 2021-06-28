const inputRef = document.querySelector('#font-size-control');
const textFontSizeChangeByInputRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputRefChange);

function onInputRefChange(event) {
  textFontSizeChangeByInputRef.style.fontSize = `${event.currentTarget.value}px`;
}
