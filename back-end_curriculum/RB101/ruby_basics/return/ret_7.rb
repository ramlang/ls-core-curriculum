# What will the following code print? Why? Don't run it until you've attempted
# to answer.

def count_sheep
  5.times do |sheep|
    puts sheep
  end
end

puts count_sheep

# my_answer =>

# The code will print:
# sheep
# sheep
# sheep
# sheep
# sheep
# This is because the puts method is called within the .times method.


# correc_answer =>

# The code will print:
# 0
# 1
# 2
# 3
# 4
# 5
# This is because the times method starts at zero and the block that is being
# executed is printing the value, not  string. The .times method returns itself
# and because it is the last line of the code the output will include 0 - 4 and
# additionally 5.