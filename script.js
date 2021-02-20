const addItem = function (e) {
  //console.log(e)
const listItem = document.createElement('li');

listItem.innerHTML = document.getElementById('input_box').value + ' - <span style="color:red">(remove)</span>';

listItem.className = 'item';

listItem.addEventListener('click', completeItem);

listItem.firstElementChild.addEventListener ('click', removeItem);

document.getElementById('ul_list').appendChild(listItem);
// Clear the input box after creating an item
document.getElementById('input_box').value = "";

}

const completeItem = function (e) {
if(e.target.localName === 'li') {
  e.target.innerHTML = '<del>' +
  e.target.innerHTML + '</del>';

} else {
  e.target.parentElement.innerHTML = 
  e.target.innerHTML;
}
}

const removeItem = function (e) {
  document.getElementById('ul_list').removeChild(e.target.parentElement);
}

// document.getElementById('item).addEventListener('click', completeItem);

for (i of document.querySelectorAll('.item')) {
  i.addEventListener('click', completeItem)
}

for (i of document.querySelectorAll('.remove_item')) {
  i.addEventListener('click', removeItem)
}

document.getElementById('add_item').addEventListener('click',addItem);
// document.getElementById('add_item').removeEventListener('click', clickButoon);