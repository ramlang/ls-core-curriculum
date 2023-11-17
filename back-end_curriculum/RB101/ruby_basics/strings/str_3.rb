# Using the following code, compare the value of name with the string 'RoGeR'
# while ignoring the case of both strings. Print true if the values are the
# same; print false if they aren't. Then, perform the same case-insensitive
# comparison, except compare the value of name with the string 'DAVE' instead
# of 'RoGeR'.

name = 'Roger'

# my_answer =>

if name.downcase == 'RoGeR'.downcase
  puts 'true' 
else
  puts 'false'
end

if name.downcase == 'DAVE'.downcase
  puts 'true' 
else
  puts 'false'
end

# my_answer_with_hint =>

puts name.casecmp("RoGeR")
puts name.casecmp("DAVE")


# correct_answer =>

puts name.casecmp('RoGeR') == 0
puts name.casecmp('DAVE') == 0

# When both compared strings are equal, #casecmp will return 0. That's why, in
# the solution, we needed the comparison with 0. If the return value equals 0,
# then we know both strings are equal.




