# Write a program that obtains two Integers from the user, then prints the
# results of dividing the first by the second. The second number must not be 0,
# and both numbers should be validated using this method:


# my_answer =>

def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end


numerator = 0
denominator = 0

loop do
  
  puts "Please enter the numerator: "
  numerator = gets.chomp
  
  puts "Please enter the denominator: "
  denominator = gets.chomp

  if denominator.to_i == 0
    puts "Error. Cannot enter zero"
  elsif !(valid_number?(numerator)) || !(valid_number?(denominator))
    puts "Invalid input"
  else
    break
  end
  
end 

answer = numerator.to_i / denominator.to_i
puts "Answer = #{answer}"
    
    
# correct answer =>

def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

numerator = nil
loop do
  puts '>> Please enter the numerator:'
  numerator = gets.chomp

  break if valid_number?(numerator)
  puts '>> Invalid input. Only integers are allowed.'
end

denominator = nil
loop do
  puts '>> Please enter the denominator:'
  denominator = gets.chomp

  if denominator == '0'
    puts '>> Invalid input. A denominator of 0 is not allowed.'
  else
    break if valid_number?(denominator)
    puts '>> Invalid input. Only integers are allowed.'
  end
end

result = numerator.to_i / denominator.to_i
puts "#{numerator} / #{denominator} is #{result}"