# Write a program that generates number between 0 to 100 and
# reports back whether the number is between 0 and 50,
# 51 and 100, or above 100.

# my_answer =>
puts "Please enter a number between 0 and 100: "
number = gets.chomp.to_i

def range(n)
  if n < 51 && n > 0
    puts "Number is btwn 0 and 50."
  elsif n < 101 && n > 50
    puts "Number is btwn 51 and 100"
  else
    puts "Number exceeds 100"
  end
end

range(number)


# example_of_answer =>
puts "Please enter a number between 0 and 100."
number2 = gets.chomp.to_i

if number2 < 0
  puts "You can't enter a negative number!"
elsif number2 <= 50
  puts "#{number2} is between 0 and 50"
elsif number2 <= 100
  puts "#{number2} is between 51 and 100"
else
  puts "#{number2} is above 100"
end