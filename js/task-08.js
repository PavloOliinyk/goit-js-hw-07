const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-action="render"]'),
  clearBtn: document.querySelector('button[data-action="destroy"]'),
  container: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.margin = `5px`;
    newDiv.style.backgroundColor = `rgb(${Math.round(
      Math.random() * (255 - 0) + 1,
    )}, ${Math.round(Math.random() * (255 - 0) + 1)}, ${Math.round(
      Math.random() * (255 - 0) + 1,
    )})`;
    boxes.push(newDiv);
  }

  refs.container.append(...boxes);
}

function destroyBoxes() {
  refs.container.innerHTML = '';
  refs.input.value = '';
}

refs.createBtn.addEventListener('click', () => {
  const amount = refs.input.value;
  createBoxes(amount);
});

refs.clearBtn.addEventListener('click', destroyBoxes);
