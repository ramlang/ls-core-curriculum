/*
Create a stopwatch application.
Specifications

The Timer

The stopwatch timer should have four 2-digit counters:

    hours (00-99)
    minutes (00-59)
    seconds (00-59)
    centiseconds (00-99)

All counters should use a leading zero when the corresponding time value is less than 10.

Note that 1 centisecond is 1/100th of a second or 10 milliseconds.

The Controls

The stopwatch should have the following controls:

    a Start/Stop button
    a Reset button

Functionality

When the user clicks the Start button:

    The text on the button changes to Stop.
    The timer starts running the centiseconds counter.
    When the centiseconds counter reaches 100, it resets to zero and the seconds counter starts incrementing.
    When the seconds counter reaches 60, it resets to zero and the minutes counter starts incrementing.
    When the minutes counter reaches 60, it resets to zero and the hour counter starts incrementing.

When the user clicks the Stop button:

    The timer stops.
    The button text changes to Start.

When the user clicks the Reset button:

    The timer stops running if it is already running.
    The timer resets all counters to 00.

*/

/*
APPROACH
--------

Q: Do I need to use the Date class?

Q: Can I use setTimeout or even better set Interval?

I initialize a callback to setInterval that increments the value being displayed on the DOM, and then when it reaches a certain value, it triggers another setInterval and reset's itself to zero.

1. Define a timer class

2. When constructed it sets up the start and stop button event listeners
  => also contains all the callback functions needed

3. Set up centisecond setInterval function
  => increment a counter every 10  milliseconds
  => replace span element value with class "centisecs"
  => Once 99 seconds is reached increment secs value
  => reset counter to 0

  => Once seconds reaches 59 reset to zero and increment minutes

  ALGORITHM
  ---------
  Initialize a click Event Listener for Start
  Intiailize a centi, sec, min, hour variables to 0;
  If button reads START...
    - start timer
    - set button to STOP
  else if button reads STOP...
    - take interval ID and stop timer
    - set button to STOP
  *** How to stop if clicking the same button?

  Invoke setInterval function:
    - args: callback, 10 (milliseconds)
  
  Increment counter variable
    - increment centi += 1
    - Change value within "centisecs" SPAN
    - Use a format number function to format values less than 10 properly
  
  When centi variable === 99
    - Increment sec variable by 1
    - Change value within 'secs' SPAN
    - Reset centi variable to 0

  When second variable === 59
    - Increment minutes variable by 1
    - Change value within "mins" SPAN
    - Reset sec variable to 0

  When minute variable === 59
    - Increment hour variable by 1
    - Change value within "hours" SPAN
    - Reset minutes variable to 0

  When hour variable === 99
    - Stop setInterval

Create event listener for RESET button
  - Change count back to zero
  - Reset all SPAN values to 00
  - Make sure START button present
*/

const time = {
  centiseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
}

function format(time) {
  if (time < 10) {
    return '0' + time.toString();
  } else {
    return time.toString();
  }
}

function stopwatch() {
  let centisecsSpan = document.querySelector('.centisecs');
  let secsSpan = document.querySelector('.secs');
  let minsSpan = document.querySelector('.mins');
  let hoursSpan = document.querySelector('.hours');

  time.centiseconds += 1;
  centisecsSpan.textContent = format(time.centiseconds);

  if (time.centiseconds === 99) {
    time.centiseconds = 0;
    centisecsSpan.textContent = format(time.centiseconds);

    time.seconds += 1;
    secsSpan.textContent = format(time.seconds);

    if (time.seconds === 59) {
      time.seconds = 0;
      secsSpan.textContent = format(time.seconds);

      time.minutes += 1;
      minsSpan.textContent = format(time.minutes);

      if (time.minutes === 59) {
        time.minutes = 0;
        minsSpan.textContent = format(time.minutes);
        
        time.hours += 1;
        hoursSpan.textContent = format(time.hours); 
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let toggle = document.querySelector(".toggle");
  let reset = document.querySelector(".reset");
  let id;

  toggle.addEventListener("click", function(e) {

    if (e.target.textContent === "Start") {
      id = setInterval(stopwatch, 10);
      e.target.textContent = "Stop";

      if (time.hours === 99) {
        clearInterval(id);
      }
    } else {
      clearInterval(id);
      e.target.textContent = "Start";
    }
  });

  reset.addEventListener("click", function(e) {
    if (id) clearInterval(id);

    toggle.textContent = "Start";

    time.centiseconds = 0;
    time.seconds = 0;
    time.minutes = 0;
    time.hours = 0;

    let spans = document.getElementsByTagName('span');
    Array.prototype.slice.call(spans).forEach((span) => {
      span.textContent = format(0);
    });
  });

});

// var App = {
//   $toggleButton: $('.toggle'),
//   $resetButton: $('.reset'),
//   isOn: false,
//   centiSecs: 0,
//   secs: 0,
//   mins: 0,
//   hours: 0,

//   startStop: function() {
//     if (this.isOn) {
//       this.stop();
//     } else {
//       this.start();
//     }
//   },

//   start: function() {
//     this.interval = setInterval(this.addTime.bind(this), 10);
//     this.$toggleButton.text('Stop');
//     this.isOn = true;
//   },

//   stop: function() {
//     clearInterval(this.interval);
//     this.$toggleButton.text('Start');
//     this.isOn = false;
//   },

//   addTime: function() {
//     this.centiSecs++;
//     if (this.centiSecs === 100) {
//       this.centiSecs = 0;
//       this.secs++;

//       if (this.secs === 60) {
//         this.secs = 0;
//         this.mins++;

//         if (this.mins === 60) {
//           this.mins = 0;
//           this.hours++;
//         }
//       }
//     }

//     this.displayTime();
//   },

//   reset: function() {
//     this.isOn && this.stop();

//     this.centiSecs = 0;
//     this.secs = 0;
//     this.mins = 0;
//     this.hours = 0;

//     this.displayTime();
//   },

//   displayTime: function() {
//     $('.centisecs').text(this.centiSecs < 10 ? '0' + this.centiSecs : this.centiSecs);
//     $('.secs').text(this.secs < 10 ? '0' + this.secs : this.secs);
//     $('.mins').text(this.mins < 10 ? '0' + this.mins : this.mins);
//     $('.hours').text(this.hours < 10 ? '0' + this.hours : this.hours);
//   },

//   init: function() {
//     this.$toggleButton.on('click', this.startStop.bind(this));
//     this.$resetButton.on('click', this.reset.bind(this));
//   }
// };

// App.init();