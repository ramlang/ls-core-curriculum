# What does the following error message mean for the code below?

# block.rb1:in `execute': wrong number of arguments (0 for 1) (ArgumentError)
# from test.rb:5:in `<main>'

def execute(block)
  block.call
end

execute { puts "Hello from inside the execute method!" }

# my_answer =>

# The error is indicating that you are trying to pass a block without
# having specified the parameter. The & should be infront of word block
# in the method header...

def execute(&block)
  block.call
end

execute { puts "Hello from inside the execute method!" }


# example_of_answer =>
# The method parameter block is missing the ampersand sign & that allows
# a block to be passed as a parameter.