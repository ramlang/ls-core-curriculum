# Using the following code, write a method called car that takes two arguments
# and prints a string containing the values of both arguments.

# my_answer =>

def car(make, model)
 puts make + ' ' + model
end

car('Mini', 'Cooper')


# example_of_answer =>

def car(make, model)
  puts "#{make} #{model}"
end

car('Toyota', 'Corolla')
