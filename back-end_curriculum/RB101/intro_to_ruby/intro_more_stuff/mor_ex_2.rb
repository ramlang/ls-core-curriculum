# What will the following print? What will it return?

def execute(&block)
  block  # .call
end

execute { puts "Hello from inside the execute method!" }


# correct_answer =>

# Nothing is printed to the screen because it wasn't activated with .call
# The method returns a Proc object.
