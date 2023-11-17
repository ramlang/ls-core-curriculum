# Modify the following loop so it iterates 5 times instead of just once.


iterations = 1

loop do
  puts "Number of iterations = #{iterations}"
  break
end

# my_answer =>

# loop with if
loop do
  puts "Number of iterations = #{iterations}"
  if iterations >= 5
    break
  end
  iterations += 1
end


# for loop
iterations = 1

for i in 1..5
  puts "Number of iterations = #{iterations}"
  iterations += 1
end


# while loop
iterations = 1

while iterations <= 5
  puts "Number of iterations = #{iterations}"
  iterations += 1
end


# example_of_answer =>

iterations = 1

loop do
  puts "Number of iterations = #{iterations}"
  iterations += 1
  break if iterations > 5
end

# if break was moved up...

iterations = 1

loop do
  puts "Number of iterations = #{iterations}"
  break if iterations >= 5
  iterations += 1
end

# the operator would need to be changed to == or >=