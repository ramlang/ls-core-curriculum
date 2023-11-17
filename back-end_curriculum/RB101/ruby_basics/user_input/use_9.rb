# Modify this program so it repeats itself after each input/print iteration,
# asking for a new number each time through. The program should keep running
# until the user enters q or Q.

# my_answer =>

number_of_lines = nil
loop do
  puts '>> How many output lines do you want? Enter a number >= 3 (Q to quit):'
  number_of_lines = gets.chomp # added .chomp
  
  break if number_of_lines == 'q' || number_of_lines == 'Q' # added line
  number_of_lines = number_of_lines.to_i # added line
  
  if number_of_lines >= 3
    number_of_lines.times { puts 'Launch School is the best!' } # added line
  else
    puts ">> That's not enough lines."
  end
end


# example_of_answer =>

loop do
  input_string = nil
  number_of_lines = nil

  loop do
    puts '>> How many output lines do you want? ' \
         'Enter a number >= 3 (Q to Quit):'

    input_string = gets.chomp.downcase
    break if input_string == 'q'

    number_of_lines = input_string.to_i
    break if number_of_lines >= 3

    puts ">> That's not enough lines."
  end

  break if input_string == 'q'

  while number_of_lines > 0
    puts 'Launch School is the best!'
    number_of_lines -= 1
  end
end



