// Your JavaScript code should:

//     Add an event handler for the submit event on the form.
//     Retrieve the item name and value from the form elements.
//     Use a quantity of 1 if the quantity field is left empty.
//     Create a new list item object using the name and quantity as strings.
//     Add the list item to the grocery list portion of the HTML.
//     Clear the form's contents.

// You may use jQuery or any other library you want. However, you can easily build this project with vanilla JavaScript and the DOM API. Our version doesn't use any libraries.

document.addEventListener('DOMContentLoaded', (e) => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let unorderedList = document.querySelector('ul');
    let item = form['name'].value;
    let qty = form['quantity'].value
    let listItem = document.createElement('li');

    if (qty === '') {
      qty = 1;
    }
    
    listItem.textContent = `${qty} ${item}`;
    unorderedList.appendChild(listItem);

    form.reset()
  });
});