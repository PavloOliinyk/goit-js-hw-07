const inputRef = document.querySelector('#font-size-control');
const textFontSizeChangeByInputRef = document.querySelector('#text');
textFontSizeChangeByInputRef.style.fontSize = `${inputRef.value}px`;
console.log(textFontSizeChangeByInputRef.style.fontSize);

inputRef.addEventListener('input', onInputRefChange);

function onInputRefChange(event) {
  textFontSizeChangeByInputRef.style.fontSize = `${event.currentTarget.value}px`;
}
