const items = document.querySelector('.app-items');
const input = document.querySelector('.app-footer-input');
const addBtn = document.querySelector('.app-footer-button');

function onAdd() {
  const text = input.value;
  if (text === ''){
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

function createItem(text){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','app-item-row');

  const item = document.createElement('div');
  item.setAttribute('class','app-item');

  const name = document.createElement('span');
  name.setAttribute('class','app-item-name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'app-item-delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-can"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class','app-divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}
addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter'){
    onAdd();
  }
});