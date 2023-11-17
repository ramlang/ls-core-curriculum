const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

class App {
  constructor() {
    this.submitButton = document.querySelector('.submit');
    this.resetButton = document.querySelector('.reset_form');
    this.gradeCallback = this.grade.bind(this);
    this.resetCallback = this.reset.bind(this);


    this.render();
    this.enableSubmit();
  }

  render() {
    questions.forEach((question) => {
      let html = document.getElementById("question_template").innerHTML;
      let template = Handlebars.compile(html);
      let fieldset = document.querySelector('fieldset');
      fieldset.insertAdjacentHTML("beforeend",template(question));
    })
  }

  grade() {
    let form = document.querySelector('form');
    let data = new FormData(form);

    questions.forEach((object) => {
      let id = object.id;

      if (data.has(id) && answerKey[id] === data.get(id)) {
        this.correct(id)
      } else {
        this.incorrect(id);
      }
    })

    this.disableSubmit();
    this.enableReset();
  }

  correct(id) {
    let question = document.querySelector(`div[data-id="${id}"]`);
    let p = question.querySelector('.result');
    p.classList.add("correct");
    p.textContent = "CORRECT!";
  }

  incorrect(id) {
    let question = document.querySelector(`div[data-id="${id}"]`);
    let p = question.querySelector('.result');
    p.classList.add("wrong");
    p.textContent = `FOOL! The corret answer is ${answerKey[id]}.`;
  }

  disableSubmit() {
    this.submitButton.classList.add('disabled');
    this.submitButton.removeEventListener('click', this.gradeCallback);
  }

  disableReset() {
    this.resetButton.classList.add('disabled');
    this.resetButton.removeEventListener('click', this.resetCallback);
  }

  enableReset() {
    this.resetButton.classList.remove('disabled');
    this.resetButton.addEventListener('click', this.resetCallback);
  }

  enableSubmit() {
    this.submitButton.classList.remove('disabled');
    this.submitButton.addEventListener('click', this.gradeCallback);
  }

  reset() {
    document.querySelector('fieldset').textContent = '';
    this.render();
    this.enableSubmit();
    this.disableReset();
  }

} 

let app = new App();

/*
User selects answers, correct, incorrect, or none;

User CLICKS submit button to trigger a SUBMIT event;

SUBMIT event triggered;

OBTIAN the FORM data and create a FORMDATA object

COMAPRE the FORMDATA to the ANSWERS with format {id: answer}
=> ITERATE through the formData object ENTRIES [key, value]
=> COMAPRE answers at FORMDATA KEY to the value of FORMDATA
  => IF they are the same the answer is correct
    > add CORRECT class to the <p> tag with class "result"
    > append "Correct!" to the <p> tag with class "result"
  => IF they are NOT the same answer the answer is incorrect
    > add INCORRECT class to the <p> tag with class "result"
    > append "Incorrect! The correct answer is ${answer}" to the <p> tag with class "result"

DISABLE the SUBMIT button
ENABLE reset button

User CLICKS reset button
=> ALL radio buttons should be reset

*/