# The code below shows an example of a for loop. Modify the code so that it
# only outputs i if i is an odd number.

# my_answer =>

for i in 1..100
  if i.odd?
   puts i
  end
end


# example_of_answer =>


for i in 1..100
  puts i if i.odd?
end