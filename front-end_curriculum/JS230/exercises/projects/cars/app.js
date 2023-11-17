
const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

class App {
  constructor() {
    this.makes = this.findAllUniqueValues("make");
    this.models = this.findAllUniqueValues("model");
    this.prices = this.findAllUniqueValues("price");
    this.years = this.findAllUniqueValues("year");
    this.renderFilter();
    this.renderCarsTemplate();
    this.setupEventListener();
    this.setupMakeEventListener();
  }

  renderFilter() {
    let div = document.getElementById('filters');
    let html = document.getElementById('filters_template').innerHTML;
    let template = Handlebars.compile(html);
    div.insertAdjacentHTML("beforeend", template(
      { 
        'makes': this.makes,
        'models': this.models,
        'prices': this.prices,
        'years': this.years,
      }
    ));
  }

  renderCarsTemplate(filteredCars=cars) {
    let partialHTML = document.getElementById('car_template').innerHTML;
    let html = document.getElementById('cars_template').innerHTML;
    let div = document.getElementById('cars');

    Handlebars.registerPartial('car_template', partialHTML);
    let template = Handlebars.compile(html);
    div.insertAdjacentHTML("beforeend", template({'cars': filteredCars}));
  }

  findAllUniqueValues(key) {
    return cars.reduce((acc, elem) => {
      if (!acc.includes(elem[key])) {
        acc.push(elem[key]);
      }
      return acc;
    }, []);
  }

  findCars(filters) {
    return cars.filter((car) => {
      return Object.keys(filters).every(key => {
        return car[key] == filters[key];
      });
    })
  }

  removeCurrentCars() {
    let cars = document.getElementsByClassName("car");
    Array.prototype.slice.call(cars).forEach(div => div.remove());
  }

  removeOptionsFromSelect(select) {
    for (let count = select.length; count > 0; count--) {
      select.remove(0);
    }
  }

  buildFilterObject(collection) {
    let array = Array.prototype.slice.call(collection);
    return array.reduce((result, elem) => {
      if (elem.value) result[elem.name] = elem.value;
      return result;
    }, {});
  }

  buildModelOptions(make) {
    return cars.reduce((result, car) => {
      if (car.make === make && !result.includes(car.model)) {
        result.push(car.model);
      }
      return result;
    }, []);
  }

  updateModelOptions(newOptions, selectElem) {
    newOptions.forEach((model) => {
      let option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      selectElem.appendChild(option);
    })
  }

  setupEventListener() {
    let button = document.querySelector('.filter_btn');
    button.addEventListener("click", function() {
      let selectElements = document.querySelectorAll('select');
      let filters = this.buildFilterObject(selectElements);
      let matches = this.findCars(filters);

      this.removeCurrentCars();
      this.renderCarsTemplate(matches);
    }.bind(this));
  }

  setupMakeEventListener() {
    let makeSelect = document.getElementById("make_select");
    makeSelect.addEventListener("change", function(e) {
      let make = e.currentTarget.value;
      let modelSelect = document.getElementById("model_select");
      let validModels = this.buildModelOptions(make);

      this.removeOptionsFromSelect(modelSelect);
      this.updateModelOptions(validModels, modelSelect);
    }.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', function(e) {
  let app = new App;
});


// 0. Get all the makes, models, years, and price
//   => organize into an object with array values 

// 1. Render the filters template
//   => Use the `cars` object as input
//   => Might need to obtain the values for each category as an array
//   => Insert into DIV with ID "filters"

// 2. Render the individual car templates
//   => Registering partial and passing obj to cars_template
//   => Use cars object as input
//   => Store each element created 
//   => Append to the DIV with ID 'cars'
//   => The default should display all vehicles


// 3. Add the event listener to BUTTON
//   => should listen for a SUBMIT event 
//   Q: Do I need event listeners on every single select?
//      How do I access the value of the select if there is no form element
//      How do I access the value
//   A: Obtain all select elements to obtain values after the submit event
//   => Get filter values and create an object to make comparison
//   => Filter all the rendered car templates based on created object

// 4. When an "Make" is selected filter the options for the "Model" option.
//   => Add an "change" event listened for select 
//   => Remove options from select with id "model_select"