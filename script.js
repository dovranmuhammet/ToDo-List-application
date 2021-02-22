const addItem = function (e) {
  // Create the <li> element on the fly
const listItem = document.createElement('li');
// Alter the HTML content of the created <li> tag above 
listItem.innerHTML =  `
<span class="click task-item">${document.getElementById('input_box').value}</span>
<span class="click blue">(Edit)</span>
<span class="click" style="color: red">(Remove)</span>
`
// Add event listeners to the newly create items in <li> element
listItem.querySelectorAll('.task-item')[0].addEventListener('click',completeItem);
// Append the created <li> element into <ul> element in HTML
document.getElementById('ul_list').appendChild(listItem);
// Empty the add Item input value
document.getElementById('input_box').value = "";
}

const completeItem = function (e) {
if(e.target.style.textDecoration === 'line-through') {
  e.target.style.textDecoration = 'none' 
} else {
  e.target.style.textDecoration = 'line-through';
  e.target.innerHTML;
  }
}

const removeItem = function (e) {
  document.getElementById('ul_list').removeChild(e.target.parentElement);
}

// document.getElementById('item).addEventListener('click', completeItem);

for (i of document.querySelectorAll('.task-item')) {
  i.addEventListener('click', completeItem)
}

for (i of document.querySelectorAll('.remove_item')) {
  i.addEventListener('click', removeItem)
}

document.getElementById('add_item').addEventListener('click',addItem);
// document.getElementById('add_item').removeEventListener('click', clickButoon);