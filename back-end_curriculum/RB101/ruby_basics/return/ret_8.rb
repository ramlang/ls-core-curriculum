# What will the following code print? Why? Don't run it until you've attempted
# to answer.

def count_sheep
  5.times do |sheep|
    puts sheep
  end
  10
end

puts count_sheep

# my_answer =>

# The code will print: 
# 0
# 1
# 2
# 3
# 4
# 10
# This is because .times is no longer on the last line of, so it won't be 
# returned. 10 will be returned instead.