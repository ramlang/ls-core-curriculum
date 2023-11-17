$(function() {
  const NUMBER_OF_GUESSES = 6;
  let randomWords = (function() {
    const WORDS = [ "orange", "banana", "pear", "peach" ];
  
    return function() {
      let randIdx = Math.floor(Math.random() * WORDS.length);
      let word = WORDS[randIdx];
      WORDS.splice(randIdx, 1);
      return word;
    }
  })();
  
  class Game {
    constructor() {
      this.chooseWord();
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.guessesAllowed = NUMBER_OF_GUESSES;
    }
    
    displayMessage(message) {
      $('#message').text(message);
    }

    chooseWord() {
      this.currentWord = randomWords();
      if (this.currentWord === undefined) {
        this.displayMessage("Sorry, I've run out of words.");
      }
      this.createBlanksForWord();
    }
  
    reset() {
      $('#message').text('');
      $('#guesses > span').remove();
      $('#spaces > span').remove();
      $('body').removeClass();
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.resetApples();
      this.chooseWord();
    }
  
    createBlanksForWord() {
      let total = this.currentWord.length;
      for (let count = 0; count < total; count++) {
        let span = document.createElement('span');
        $('#spaces').append(span);
      }
    }

    createLetter(letter) {
      let span = document.createElement('span');
      span.textContent = letter;
      $('#guesses').append(span);
    }

    guessedWordIsCorrect() {
      return this.currentWord.split('').every((char) => {
        return this.lettersGuessed.includes(char);
      })
    }

    won() {
      if (this.guessedWordIsCorrect()) {
        $('body').addClass('win');
        alert("You win!")
        return true;
      }
      return false;
    }

    lost() {
      if (this.incorrectGuesses === this.guessesAllowed) {
        $('body').addClass('lose');
        alert("You lose!")
        return true;
      }
      return false;
    }

    appleFalls() {
      $('#apples').addClass(`guess_${this.incorrectGuesses}`);
    }

    resetApples() {
      $('#apples').removeClass();
    }
  }

  let startGame = function(game) {
    $(document).on('keyup', function(e) {
      e.stopPropagation();
      let letter = String.fromCharCode(e.keyCode).toLowerCase();
      let word = game.currentWord;
      
      if ((e.keyCode >= 65) && (e.keyCode <= 90)) {
        game.createLetter(letter);
        game.lettersGuessed.push(letter);
        
        if (word.includes(letter)) {
          word.split('').forEach((char, ind) => {
            if (char === letter) {
              $('#spaces > span').eq(ind).text(letter);
            }
          });
        } else {
          game.incorrectGuesses += 1;
          game.appleFalls();
        }
  
        if (game.won() || game.lost()) {
          $(document).unbind('keyup');


          if (game.currentWord !== undefined) {
            $('#replay').on('click', function(e) {
              game.reset();
              startGame(game);
            });
          }
        }
      }
    });
  };

  (function() {
    let game = new Game();
    startGame(game);
  })();

  // $('#replay').on('click', function(e) {
  //   let newGame = new Game();
  //   startGame(newGame);
  // });
});
// Bind a keypress event to the document that will check the guessed letter against the word

// Only process key presses that are letters. IN other words, from a to z. You can potentially use the equivalent keycodes for these letters, which run from 97 (a) through 122 (z)

// Add the letter to the array of guessed letters

// If the guess matches at least one letter in the word, output each instance of the guessed letter in the respective blank spaces

// If the guess is not a match, increment the incorrect guess count and change the class name on the apples container to change the count of apples

// If the letter has already been guessed, ignore it

// When a letter is guessed, write it to the guesses container

// If the number of incorrect guesses matches the number of guesses available for a game (6 in this case), the game is over. Display a message and a link to start a new game. Unbind the keypress event

// If all of the letters of the word have been revealed, display a win message and a link to start a new game. Unbind the keypress event

// When the "Play another" button is clicked, a new game is constructed. The class on the apples container gets reset to show 6 apples again
