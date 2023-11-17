# Group 1
my_proc = proc { |thing| puts "This is a #{thing}." }
puts my_proc
puts my_proc.class
my_proc.call
my_proc.call('cat')

# Group 1 Observations:
# puts my_proc outputs the enocded object id of the Proc; this makes sense since we are assigning the variable to the proc object.
# puts my_proc.class outputs "Proc" which makes sense because we are returning the class of my_proc which is Proc.
# my_proc.call outputs "This is a ." because no parameter has been passed to the Proc object.
# my_proc.call("cat") outputs "This is a cat." which makes sense since "cat" is passed in to the call method. The string is assigned to the block variable thing and is then included in the outputted string.

# Group 2
my_lambda = lambda { |thing| puts "This is a #{thing}." }
my_second_lambda = -> (thing) { puts "This is a #{thing}." }
puts my_lambda
puts my_second_lambda
puts my_lambda.class
my_lambda.call('dog')
my_lambda.call
my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}." }

# Group 2 Observations:
# puts my_lambda outputs a Proc object id and (lambda) indicating that the Proc is a lambda maybe.
# puts my_second_lambda outputs the same as above, indidcating that there is additional syntax for creating a lambda.
# puts my_lambda.class outputs "Prcoc" which means that a lambda must be a type of Proc object.
# puts my_lambda.call("dog") outputs "This is a dog." similar to how a Proc object behaves.
# puts my_lambda.call throws an argument error which is not similar to Procs.
# my_third_lambda doesn't exists because a Lambda class doesn't exist.

# # Group 3
def block_method_1(animal)
  yield
end

block_method_1('seal') { |seal| puts "This is a #{seal}."}
block_method_1('seal')

# Group 3 Observations
# line 37 outputs "This is a ." because the block is yielded to but no argument is passed in.
# line 38 throws a LocalJumo error because no block is given but yield is included in the method body.

# # Group 4
def block_method_2(animal)
  yield(animal)
end

block_method_2('turtle') { |turtle| puts "This is a #{turtle}."}
block_method_2('turtle') do |turtle, seal|
  puts "This is a #{turtle} and a #{seal}."
end
block_method_2('turtle') { puts "This is a #{animal}."}

# Group 4 Observation:
# line 49 outputs "This is a turtle." because the yield is passed an argument animal.
# line 50 outputs "This is a turtle and a ." because only one argument is passed to yield so the other arguments default is nil.
# line 53 outputs a NameError because no parameters are listed within the block so animal isn't defined.