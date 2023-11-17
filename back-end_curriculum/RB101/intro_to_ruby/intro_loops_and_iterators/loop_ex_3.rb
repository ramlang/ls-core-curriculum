# 3. Write a method that counts down to zero using recursion...

# my_answer =>

def countdown(number)
  if number > 0
    puts number
    countdown(number - 1)
  else
    puts 0
  end
end

countdown(-4)


# example_of_answer =>
# Includes <= to zero incase of negative integer

def count_to_zero(number)
  if number <= 0
    puts number
  else
    puts number
    count_to_zero(number-1)
  end
end

count_to_zero(10)
count_to_zero(20)
count_to_zero(-3)
