# Given the array of several numbers below, use an until loop to print each number.

numbers = [7, 9, 13, 25, 18]

# my_answer =>

index = 0

until index == 5
  puts numbers[index]
  index += 1
end


# example_of_answer =>

count = 0

until count == numbers.size
  puts numbers[count]
  count += 1
end


