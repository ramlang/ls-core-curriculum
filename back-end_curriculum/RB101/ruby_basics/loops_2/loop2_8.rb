# Using next, modify the code below so that it only prints even numbers.

# my_answer =>

number = 0

until number == 10
  number += 1
  if number.even? # added line
    puts number
  end
end


# example_of_answer =>

number = 0

until number == 10
  number += 1 # must increment before next or you get an infinite loop
  next if number.odd?
  puts number
end