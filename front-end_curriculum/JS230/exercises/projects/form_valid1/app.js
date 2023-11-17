class App {
  constructor() {
    this.form = document.getElementsByTagName('form')[0];
    this.inputs = document.getElementsByTagName('input');
    this.firstName = document.getElementById('first_name');
    this.lastName = document.getElementById('last_name');
    this.phone = document.getElementById('phone');
    this.creditCards = document.querySelectorAll('#cc, #cc2, #cc3, #cc4');

    this.attachEventListeners(this.inputs);
    this.attachCCEventListeners(this.creditCards);
    this.firstName.addEventListener('keypress', this.blockNonAlpha.bind(this));
    this.lastName.addEventListener('keypress', this.blockNonAlpha.bind(this));
    this.phone.addEventListener('keypress', this.blockNonNumeric.bind(this));
    this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
  }

  attachEventListeners(collection) {
    let arr = Array.prototype.slice.call(collection);
    arr.forEach((elem) => {
      elem.addEventListener('focusout', this.handleFocusOut.bind(this));
      elem.addEventListener('focusin', this.handleFocus.bind(this));
    });
  }

  attachCCEventListeners(collection) {
    let arr = Array.prototype.slice.call(collection);
    arr.forEach((elem, index) => {
      elem.addEventListener('keypress', this.blockNonNumeric.bind(this));
      if (index !== 3) {
        elem.addEventListener('keyup', this.handleTab.bind(this));
      }
    });
  }
  
  handleMissingValue(ctrl) {
    let txt = this.form.querySelector(`label[for=${ctrl.name}]`).textContent;
    let msg = ctrl.nextElementSibling;
    let errMsg = txt + ' is a required field.';

    ctrl.classList.add('invalid_field');
    msg.textContent = errMsg;
  }

  handlePatterMismatch(ctrl) {
    let txt = this.form.querySelector(`label[for=${ctrl.name}]`).textContent;
    let msg = ctrl.nextElementSibling;
    let errMsg = 'Please enter a valid ' + txt + '.';

    ctrl.classList.add('invalid_field');
    msg.textContent = errMsg;

    if (ctrl.name === "password") {
      msg.textContent = 'Password must be 10 charcters long.';
    }
  }

  validateControl(ctrl) {
    if (ctrl.validity.valueMissing) {
      this.handleMissingValue(ctrl);
      return false;
    } else if (ctrl.validity.patternMismatch) {
      this.handlePatterMismatch(ctrl);
      return false;
    } else {
      return true;
    }
  }

  validateFormInputs() {
    let arr = Array.prototype.slice.call(this.inputs);

    arr.forEach(function(input) {
      this.validateControl(input);
    }.bind(this));
  }

  blockNonAlpha(e) {
    if (!e.key.match(/[a-zA-Z\s']/)) {
      e.preventDefault();
    }
  }

  blockNonNumeric(e) {
    if (!e.key.match(/[-0-9]/)) {
      e.preventDefault();
    }
  }

  handleFocus(e) {
    let ctrl = e.target;
    ctrl.parentElement.querySelector('.error_message').textContent = '';
    ctrl.classList.remove('invalid_field');
  }

  handleFocusOut(e) {
    let ctrl = e.target;
    let msg = this.form.querySelector('.form_errors');

    if (this.form.checkValidity()) {
      msg.textContent = '';
    }

    this.validateControl(ctrl);
  }

  handleTab(e) {
    if (e.target.value.length === 4) {
      e.target.nextElementSibling.nextElementSibling.focus();
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let msg = this.form.querySelector('.form_errors');

    if (e.target.checkValidity()) {
      msg.textContent = '';
      console.log(e.target);
      this.handleSerialize(e.target);
      this.form.reset();
    } else {
      msg.textContent = 'Form cannot be submitted until errors are corrected.';
      this.validateFormInputs();
      return false;
    }
  }

  handleSerialize(form) {
    let block = document.createElement('block');
    let formData = new FormData(form);
    let cc_num = formData.getAll("credit_card").join('');
    formData.delete("credit_card");
    formData.set("credit_card", cc_num)

    let params = new URLSearchParams(formData);
    block.textContent = params.toString();
    document.querySelector("body").appendChild(block);
  }
}

let app = new App();


// Prevent the default action on the Submit button.
// Add a block element to the bottom of the page with a heading of "Serialized Form". You will render the form data in this block.
// When the user clicks the Submit button, and the data is valid, extract the form data from all fields in the form. Use the data to construct a string of key/value pairs separated by &, e.g., first_name=David&last_name=Shepherd&email=davids%40example.com.
// Make sure each name/value pair is URL-encoded. For instance, in the example above, the email address uses %40 instead of @.
// Concatenate the 4 credit card inputs into a single value before adding it to the request body string.
// Render the form data as text in the block element you created earlier.



