// var App = {
//   startTimer: function(e) {
//     this.timer = setTimeout(function() {
//       this.showToolTip(e);
//     }.bind(this), 2000);
//   },

//   showToolTip: function(e) {
//     let figcap = e.target.querySelector('figcaption');
//     figcap.style.display = "block";
//   },

//   handleMouseLeave: function(e) {
//     if (this.timer) {
//       clearTimeout(this.timer);
//     }

//     e.target.querySelector('figcaption').style.display = "none";
//   },

//   init: function() {
//     let figureElements = document.querySelectorAll('figure');
//     console.log(figureElements);
//     Array.prototype.slice.call(figureElements).forEach((figure) => {
//       figure.addEventListener('mouseenter', this.startTimer.bind(this));
//       figure.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
//     });
//   }
// };

class App {
  // Creates a timer on the App object with itself bound as the context
  startTimer(e) {
    this.timer = setTimeout(function() {
      this.showToolTip(e);
    }.bind(this), 2000);
  }

  // creates a functiont hat will take an event and make the figcap visible
  showToolTip(e) {
    let figcap = e.target.querySelector('figcaption');
    figcap.style.display = "block";
  }

  // creates a function that will take an event and make display invisible,
  // but also will clear any timers that occur first, on the App object itself.
  handleMouseLeave(e) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    e.target.querySelector('figcaption').style.display = "none";
  }

  constructor() {
    let figureElements = document.querySelectorAll('figure');
    console.log(figureElements);
    Array.prototype.slice.call(figureElements).forEach((figure) => {
      figure.addEventListener('mouseenter', this.startTimer.bind(this));
      figure.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    });
  }
};

document.addEventListener("DOMContentLoaded", function() {
  new App;
});
  
