# Create a program with a method that accepts a name as a parameter
# and generates a greeting.

# my_answer =>

def greeting(name)
  puts "Welcome to my Ruby program, #{name}!"
end

puts "Enter your name: "
name = gets.chomp

greeting(name)


#example_of_answer =>

def greeting(name)
  "Hello, " + name + ". How are you doing?"
end

puts greeting("Bob")