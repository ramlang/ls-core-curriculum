# Write two methods, one that returns the string "Hello" and one that returns
# the string "World". Then print both strings using #puts, combining them into
# one sentence.

# my_answer =>

def hello
  "Hello"
end

def world
  "World"
end

puts hello + ' ' + world


# example_of_answer =>

def hello
  'Hello'
end

def world
  'World'
end

puts "#{hello} #{world}"