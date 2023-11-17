# Write a method that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

# sum_square_difference(3) == 22
#   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
# sum_square_difference(10) == 2640
# sum_square_difference(1) == 0
# sum_square_difference(100) == 25164150


# input is an integer
# output is an integer
# problem domain = finding the difference, sum numbers together and then square, square numbers and then sum, return the value

def sum_square_difference(num)
  sum = 0
  1.upto(num) do |n|
    sum += n
  end
  
  squared_sum = 0
  1.upto(num) do |n|
    squared_sum += n **2
  end
  
  sum**2 - squared_sum
end

p sum_square_difference(3) == 22
    # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150


# correct_answer =>
def sum_square_difference(n)
  sum = 0
  sum_of_squares = 0

  1.upto(n) do |value|
    sum += value
    sum_of_squares += value**2
  end

  sum**2 - sum_of_squares
end

