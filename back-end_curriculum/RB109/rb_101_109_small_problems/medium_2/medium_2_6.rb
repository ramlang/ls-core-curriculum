# right One angle of the triangle is a right angle (90 degrees)
# acute All 3 angles of the triangle are less than 90 degrees
# obtuse One angle is greater than 90 degrees.
# To be a valid triangle, the sum of the angles must be exactly 180 degrees, and all angles must be greater than 0: if either of these conditions is not satisfied, the triangle is invalid.

# Write a method that takes the 3 angles of a triangle as arguments, and returns a symbol :right, :acute, :obtuse, or :invalid depending on whether the triangle is a right, acute, obtuse, or invalid triangle.

# You may assume integer valued angles so you don't have to worry about floating point errors. You may also assume that the arguments are specified in degrees.

# my_answer =>

# PEDAC

# Problem ---
# input is three integers representing angles
# output a symbol
# problem domain = sum the angles to validate 180 degrees, validate to be greater than zero, determine if one angle is equal to 90 degrees, determine if all angles are less than 90 degress, determine if one angle is greater than 90 degrees, return a symbol

# Examples/ Test Cases ---
# triangle(60, 70, 50) == :acute
# triangle(30, 90, 60) == :right
# triangle(120, 50, 10) == :obtuse
# triangle(0, 90, 90) == :invalid
# triangle(50, 50, 50) == :invalid

def triangle(angle_1, angle_2, angle_3)
  angles = [angle_1, angle_2, angle_3].sort
  case
  when angles.any?(0) || angles.sum != 180 then return :invalid
  when angles.max > 90 then return :obtuse
  when angles.count(90) == 1 then return :right
  else return :acute
  end
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid


# example_of_answer =>
def triangle(angle1, angle2, angle3)
  angles = [angle1, angle2, angle3]

  case
  when angles.reduce(:+) != 180, angles.include?(0)
    :invalid
  when angles.include?(90)
    :right
  when angles.all? { |angle| angle < 90 }
    :acute
  else
    :obtuse
  end
end
