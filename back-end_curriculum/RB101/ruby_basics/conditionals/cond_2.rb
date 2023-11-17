# In the code below, sun is randomly assigned as 'visible' or 'hidden'.

sun = ['visible', 'hidden'].sample

# Write an unless statement that prints "The clouds are blocking the sun!"
# unless sun equals 'visible'.

#my_answer =>

puts "The clouds are blocking the sun!" unless sun == 'visible'


# example_of_answer =>

unless sun == 'visible'
  puts 'The clouds are blocking the sun!'
end