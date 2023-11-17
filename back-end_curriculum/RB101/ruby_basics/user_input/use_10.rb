# Write a program that requests two integers from the user, adds them together,
# and then displays the result. Furthermore, insist that one of the integers be
# positive, and one negative; however, the order in which the two integers are
# entered does not matter.

# Do not check for the positive/negative requirement until both integers are
# entered, and start over if the requirement is not met.

# You may use the following method to validate input integers:


def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end


def user_input
 # add loop method
 puts "Please enter a positive or negtative integer >> "
 input = gets.chomp
 # return input.to_i if valid_number?(number) is true (break is not needed with return)
 # puts error message if valid_number?(number) is false and loops
end


first_number = user_input # initialize to nil
second_number = user_input # initialize to nil

num1 = first_number.to_i # would not be needed if the return value is .to_i
num2 = second_number.to_i # would not be needed if the return value is .to_i



if !(num1 < 0 && num2 > 0) || !(num1 > 0 && num2 < 0) # discard use product instead see below
    puts "Must enter a positive and a negative integer >>"
    break
else
  while !(valid_number?(first_number)) # discard block not needed
    puts "Must enter an integer >>"
    first_number = user_input
    num1 = first_number.to_i
  end
  
  while !(valid_number?(second_number)) # discard block not needed
    puts "Must enter an integer >>"
    second_number = user_input
    num2 = second_number.to_i
  end
  
# loop
# first_number = reassign to return from user_input
# second_number = reassign to return from user_input
# break if product of first and second number is less than zero
# error message one must be positive and one negative and loop
# end loop

    answer = num1 + num2
    puts "#{num1} + #{num2} = #{answer}"
end # discard


# correct_answer =>

def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

def read_number
  loop do
    puts '>> Please enter a positive or negative integer:'
    number = gets.chomp
    return number.to_i if valid_number?(number)
    puts '>> Invalid input. Only non-zero integers are allowed.'
  end
end

first_number = nil
second_number = nil

loop do
  first_number = read_number
  second_number = read_number
  break if first_number * second_number < 0
  puts '>> Sorry. One integer must be positive, one must be negative.'
  puts '>> Please start over.'
end

sum = first_number + second_number
puts "#{first_number} + #{second_number} = #{sum}"