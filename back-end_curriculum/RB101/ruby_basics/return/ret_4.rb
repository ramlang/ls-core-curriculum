# What will the following code print? Why? Don't run it until you've attempted
# to answer.

def meal
  puts 'Dinner'
  return 'Breakfast'
end

puts meal

# This code will print:
# Dinner
# Breakfast
# This is because the method includes a puts statement so 'Dinner' will be
# printed. The return is 'Breakfast' which will be printed when the method is
# called with puts.