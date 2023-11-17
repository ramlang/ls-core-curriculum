def valid_integer?(string)
  string.to_i.to_s == string
end

def guess_number(max_number, max_attempts)
  winning_number = (1..max_number).to_a.sample
  attempts = 0

  loop do
    attempts += 1
    break if attempts > max_attempts

    input = nil
    until valid_integer?(input)
      print 'Make a guess: '
      input = gets.chomp
    end

    guess = input.to_i

    if guess == winning_number
      puts 'Yes! You win.'
      break  # <= add break statement to end game when guesssed correctly
    else
      puts 'Nope. Too small.' if guess < winning_number
      puts 'Nope. Too big.'   if guess > winning_number

      # Try again:
      #guess_number(max_number, max_attempts)  # <= remove the recursive method call
    end
  end
end

guess_number(10, 3)

# Run the code and observe its behavior. Can you figure out what is wrong?

# my_answer =>
# The method is a recursive one when it shouldn't be. This is because at the beginning of each method the number of attempts and generating of a random number is reset each time the method is called. It would be better if this method looped and was not recursive.