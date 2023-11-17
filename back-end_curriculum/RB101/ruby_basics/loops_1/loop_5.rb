# Modify the code below so "Hello!" is printed 5 times.

say_hello = 1 # my_answer => changed true -> 1

while say_hello < 6 # my_answer => added operator < and operand 6
  puts 'Hello!'
  say_hello += 1 # my_answer => added operator += and operand 1
end


# example_of_answer =>

say_hello = true
count = 0

while say_hello
  puts 'Hello!'
  count += 1
  say_hello = false if count == 5
end

# if statement

if count == 5
  say_hello = false
end

# #times

5.times do
  puts 'Hello!'
end
