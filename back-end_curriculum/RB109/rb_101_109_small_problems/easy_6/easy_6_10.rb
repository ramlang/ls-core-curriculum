# Write a method that takes a positive integer, n, as an argument, and displays a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
# triangle(5)

#     *
#    **
#   ***
#  ****
# *****
# triangle(9)

#         *
#        **
#       ***
#      ****
#     *****
#    ******
#   *******
#  ********
# *********

# my_answer =>

# PEDAC

# Problem ---
# input is a integer
# output is a string of stars in the shape of a triangle
# problem domain = outputting an increasing number of stars, the correct width, the correct height
# explicit reqs = one side should be in the lower left and the other side should be in the upper right, each side of the triangle should have n number of stars
# implicit reqs = assume the trianlge will fit to the terminal, what if zero is entered

# mental model = accept an integer, a certain number of times repeat and loop pritning out stars, keep right justified, spaces should decrease as stars increase, repeat until triangle is compelted

# Examples/ Test Cases ---
# triangle(5)

#     *
#   **
#   ***
# ****
# *****
# triangle(9)

#         *
#       **
#       ***
#     ****
#     *****
#   ******
#   *******
# ********
# *********

# Data Structures ---
# input = integer
# inbetween = loop
# output = string of stars
# methods = #format, regex, #times, #print

# Algorithms ---
# set counter variable
# repeat the following integer number of times
# print counter stars + spaces starting on the right side
# add one to counter
# subtract one from spaces
# repeat until completed

# Code with Intent ---
def triangle(integer)
  (integer + 1).times do |num|
    integer.times { |num| print ' ' }
    num.times { |num| print '*' }
    puts ' '
    integer -= 1
  end
end

triangle(5)
triangle(9)


# example_of_answer =>
def triangle(num)
  spaces = num - 1
  stars = 1

  num.times do |n|
    puts (' ' * spaces) + ('*' * stars)
    spaces -= 1
    stars += 1
  end
end

# further_exploration =>
# Try modifying your solution so it prints the triangle upside down from its current orientation. Try modifying your solution again so that you can display the triangle with the right angle at any corner of the grid.