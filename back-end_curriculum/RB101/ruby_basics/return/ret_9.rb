# What will the following code print? Why? Don't run it until you've attempted
# to answer.

def count_sheep
  5.times do |sheep|
    puts sheep
    if sheep >= 2
      return
    end
  end
end

p count_sheep

# my_answer =>

# The code will print:
# 0
# 1
# 2
# This is because of the if statement which should break out of method.


# correct_answer =>
# 0
# 1
# 2
# nil
# This is because no return value was provided so the return is nil. The p method
# will print out nil in this case.
