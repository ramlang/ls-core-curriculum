# Write a method that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the method. The smallest such star you need to handle is a 7x7 grid.

# my_answer =>

# PROBLEM:
# input = odd integer "n"
# output = lines of strings that form an 8 pointed start in an nxn sized grid

# rules:
# - odd integer argument is provided
# - possibly do not need to account for even integers
# - smallest sized grid is a 7x7 

# tasks:
# - determine proper spacing for stars within the grid
# - determine proper spacing for whitespace within the grid
# - print a row of n amount of stars in the middle

# EXAMPLES:
# star(7)

# *  *  *
#  * * *
#   ***
# *******
#   ***
#  * * *
# *  *  *

# star(9)

# *   *   *
#  *  *  *
#   * * *
#    ***
# *********
#    ***
#   * * *
#  *  *  *
# *   *   *

# DATA STRUCTURE:
# - #upto, #times, #downto, #puts, loop

# ALGORITHM
# >> option 1:
# - print out the given number of lines
# - for each line..
#   - star + ((n - 3) / 2) spaces + star + ((n - 3)/ 2) + star
#   - outside space + star + space + star + space + star
#   - ...
#   - print n stars
#   - ...
#   - increment back to n

def star(n)
  outer_space = 0
  inner_space = (n - 3) / 2
  
  loop do
    out_space = " " * outer_space
    in_space = " " * inner_space
    puts "#{out_space}*#{in_space}*#{in_space}*#{out_space}"
    break if inner_space <= 0
    outer_space += 1
    inner_space -= 1
  end
  
  puts "*" * n
  
  loop do
    out_space = " " * outer_space
    in_space = " " * inner_space
    puts "#{out_space}*#{in_space}*#{in_space}*#{out_space}"
    break if outer_space <= 0
    outer_space -= 1
    inner_space += 1
  end
  
end


star(7)

# *  *  *
#  * * *
#   ***
# *******
#   ***
#  * * *
# *  *  *

star(9)

# *   *   *
#  *  *  *
#   * * *
#    ***
# *********
#    ***
#   * * *
#  *  *  *
# *   *   *

# *** time = 54 min ***

# correct_answer =>
def print_row(grid_size, distance_from_center)
  number_of_spaces = distance_from_center - 1
  spaces = ' ' * number_of_spaces
  output = Array.new(3, '*').join(spaces)
  puts output.center(grid_size)
end

def star(grid_size)
  max_distance = (grid_size - 1) / 2
  max_distance.downto(1) { |distance| print_row(grid_size, distance) }
  puts '*' * grid_size
  1.upto(max_distance)   { |distance| print_row(grid_size, distance) }
end