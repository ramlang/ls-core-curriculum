class Model {
  constructor(view) {
    this.view = view;
    this.default();
  }

  default() {
    this.number = 0;
    this.total = 0;
    this.op = null;
  }

  update(data) {
    this.number = parseFloat(data) || 0;
    this.view.setValue(this.number);
  }
  
  addOp(newOp) {
    if (this.op) {
      this.view.addToExpression(this.number);
      this.view.addToExpression(this.op);
      this.calcTotal();
      this.view.setValue(this.total);
      this.op = newOp;
      this.number = 0;
    } else {
      this.total = this.number;
      this.view.addToExpression(this.number);
      this.view.addToExpression(newOp);
      this.op = newOp;
    }
  }

  result() {
    this.calcTotal();
    this.view.clearExpression();
  }

  calcTotal() {
    console.log(this);

    switch (this.op) {
      case "+":
        this.total += this.number;
        break;
      case "-":
        this.total -= this.number;
        break;
      case "/":
        this.total /= this.number;
        if (isNaN(this.total)) this.total = 0;
        break;
      case "x":
        this.total *= this.number;
        break;
      case "%":
        this.total %= this.number;
        break;
    }
    this.view.setValue(this.total);
    this.number = 0;
    console.log("num is set to zero", this.number);
  }
}

class View {
  constructor() {
    this.screen = document.querySelector('.current_num');
    this.expression = document.querySelector('.calculation');
  }

  currentValue() {
    return this.screen.textContent;
  }

  setValue(value) {
    return this.screen.textContent = value.toString();
  }
 
  appendValue(value) {
    return this.screen.textContent += value.toString();
  }
 
  prependValue(value) {
    return this.screen.textContent = value.toString() + this.screen.textContent;
  }

  removePrefix() {
    return this.screen.textContent = this.screen.textContent.slice(1);
  }

  addToExpression(value) {
    return this.expression.textContent += (' ' + value.toString());
  }

  toggleNegative() {
    if (parseFloat(this.currentValue()) > 0) {
      return this.prependValue('-');
    } else {
      return this.removePrefix();
    }
  }

  clearScreen() {
    this.screen.textContent = '0';
  }

  clearExpression() {
    console.log(this.expression);
    this.expression.textContent = "";
    console.log(this.expression);
  }

  clearAll() {
    this.screen.textContent = '0';
    this.expression.textContent = "";
  }
}

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model(this.view);
    this.done = true;
  }

  setupEventListener() {
    let buttons = document.getElementById('buttons');

    buttons.addEventListener("click", function(e) {
      if (e.target.nodeName === "A") {
        this.process(e.target);
      }
    }.bind(this));
  }

  process(value) {
    switch (value.className) {
      case "control":
        return this.handleControls(value.textContent);
      case "digit": 
        return this.handleDigits(value.textContent);
      case "op":
        return this.handleOperations(value.textContent);
      case "result_button":
        return this.handleResult();
      case "dot":
        return this.handleDot();
    }
  }

  handleDigits(value) {
    if (this.done) {
      this.model.update(value);
      this.done = false;
    } else {
      this.view.appendValue(value);
    }
  }

  handleOperations(value) {
    this.model.update(this.view.currentValue());
    this.model.addOp(value);
    this.done = true;
  }

  handleResult() {
    this.model.update(this.view.currentValue());
    this.model.result();
    this.model.op = null;
    this.done = true;
  }

  handleDot() {
    this.view.appendValue('.');
  }

  handleControls(value) {
    switch (value) {
    case "NEG":
      this.handleNEG();
      break;
    case "C":
      this.handleC();
      break;
    case "CE":
      this.handleCE();
    }
  }

  handleNEG() {
    let data = this.view.toggleNegative();
    this.model.update(data);
  }

  handleC() {
    this.model.default();
    this.view.clearAll();
    this.model.update();
    this.done = true;
  }

  handleCE() {
    this.view.clearScreen();
    this.view.setValue('0');
    this.model.update();
    this.done = true;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let controller = new Controller();
  controller.setupEventListener();
});