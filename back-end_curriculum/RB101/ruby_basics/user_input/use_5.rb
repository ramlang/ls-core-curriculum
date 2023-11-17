# Write a program that prints 'Launch School is the best!' repeatedly until a
# certain number of lines have been printed. The program should obtain the
# number of lines from the user, and should insist that at least 3 lines are
# printed.

# For now, just use #to_i to convert the input value to an Integer, and check
# that result instead of trying to insist on a valid number; validation of
# numeric input is a topic with a fair number of edge conditions that are beyond
# the scope of this exercise.

# my_answer =>

num = 0

while num < 3 do  
  puts "How many lines should be printed? (Number must be > or = to 3)"
  num = gets.chomp.to_i
  if num < 3
    puts "Not enough lines. Try again..."
  end
end

num.times do
  puts "Launch School is the best!"
end


# my_answer_edited =>

puts "How many lines should be printed? (Number must be > or = to 3)"
num = gets.chomp.to_i
while num < 3 do  
  puts "Not enough lines. Try again..."
  num = gets.chomp.to_i
end
num.times do
  puts "Launch School is the best!"
end


# example answer =>

number_of_lines = nil
loop do
  puts '>> How many output lines do you want? Enter a number >= 3:'
  number_of_lines = gets.to_i
  break if number_of_lines >= 3
  puts ">> That's not enough lines."
end

while number_of_lines > 0
  puts 'Launch School is the best!'
  number_of_lines -= 1
end

