document.addEventListener('DOMContentLoaded', (e) => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let num1 = parseInt(form['first-number'].value, 10);
    let num2 = parseInt(form['second-number'].value, 10);
    let operator = form['operator'].value;
    let result;

    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
    }

    let heading = document.querySelector('h1');
    heading.textContent = result;

    // form.reset();
  });
});