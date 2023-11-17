# equilateral All 3 sides are of equal length
# isosceles 2 sides are of equal length, while the 3rd is different
# scalene All 3 sides are of different length
# To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and all sides must have lengths greater than 0: if either of these conditions is not satisfied, the triangle is invalid.

# Write a method that takes the lengths of the 3 sides of a triangle as arguments, and returns a symbol :equilateral, :isosceles, :scalene, or :invalid depending on whether the triangle is equilateral, isosceles, scalene, or invalid.

# my_answer =>

# PEDAC

# Problem ---
# input is three integers or float
# output is a symbol
# problem domain = determining if all sides are equal, determining whether 2/3 are equal, determining whether all three are different, add legnths of two shortest sides, compare to longest side, validate all sides are greater than 0, return invalid symbol is trianlge is invalid
# explicit reqs = return symbol, must be greater than 0, values for scalene must be validated
# implicit reqs = the arguments can be floats or integers

# mental model = store values in an array, count if any zeros, return invalid if true, count value at zero index, if greater than 2 return equilateral, if equal to 2 return isolceles, otherwise call scalene method, sort the values in thr array, add the index at zero and one, compare to second index, return true is true, and then retrun scalene. 

# Examples/ Test Cases ---
# triangle(3, 3, 3) == :equilateral
# triangle(3, 3, 1.5) == :isosceles
# triangle(3, 4, 5) == :scalene
# triangle(0, 3, 3) == :invalid
# triangle(3, 1, 1) == :invalid

# Code with Intent ---

def invalid_triangle?(array)
  sum_of_short_sides = array[0] + array[1]
  longest_side = array[2]
  return true if sum_of_short_sides < longest_side
  false
end

def triangle(num_1, num_2, num_3)
  lengths = [num_1, num_2, num_3].sort
  return :invalid if lengths.any?(0) || invalid_triangle?(lengths)
  return :equilateral if lengths.all?(lengths[0])
  return :isosceles if lengths.count(lengths[1]) > 1
  :scalene
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid


# example_of_answer =>

def triangle(side1, side2, side3)
  sides = [side1, side2, side3]
  largest_side = sides.max

  case
  when 2 * largest_side > sides.reduce(:+), sides.include?(0)
    :invalid
  when side1 == side2 && side2 == side3
    :equilateral
  when side1 == side2 || side1 == side3 || side2 == side3
    :isosceles
  else
    :scalene
  end
end

