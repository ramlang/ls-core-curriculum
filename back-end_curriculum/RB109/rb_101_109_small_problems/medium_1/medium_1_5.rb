# Write a method that displays a 4-pointed diamond in an n x n grid, where n is an odd integer that is supplied as an argument to the method. You may assume that the argument will always be an odd integer.
# diamond(1)

# *

# diamond(3)

#  *
# ***
#  *
 
# diamond(9)

#     *
#    ***
#   *****
#  *******
# *********
#  *******
#   *****
#    ***
#     *

# my_answer =>

# n is always odd
# use #times method
# use a counter
# use counter for spaces and stars
# number of stars in the middle is equal to given num


# def diamond(n)
#   spaces = n / 2
#   stars = 1
#   until stars == n do
#       print " " * spaces
#       print "*" * stars
#       puts ""
#       spaces -= 1
#       stars += 2
#   end
#   until stars < 1
#       print " " * spaces
#       print "*" * stars
#       puts ""
#       spaces += 1
#       stars -= 2
#   end
# end

# diamond(1)
# diamond(3)
# diamond(9)

# Could have done all this in one method, but the result would have either been pretty messy, or it would repeat itself.
require 'pry'
# correct_answer =>
def print_row(grid_size, distance_from_center)
  binding.pry
  number_of_stars = grid_size - 2 * distance_from_center
  stars = '*' * number_of_stars
  binding.pry
  puts stars.center(grid_size)
end

def diamond(grid_size)
  max_distance = (grid_size - 1) / 2
  max_distance.downto(0) { |distance| print_row(grid_size, distance) }
  binding.pry
  1.upto(max_distance)   { |distance| print_row(grid_size, distance) }
end

# diamond(1)
diamond(3)
diamond(9)

# further_exploration =>
# Try modifying your solution or our solution so it prints only the outline of the diamond:

# diamond(5)

#   *
#  * *
# *   *
#  * *
#   *