# Write a method that takes a first name, a space, and a last name passed as a single String argument, and returns a string that contains the last name, a comma, a space, and the first name.
# swap_name('Joe Roberts') == 'Roberts, Joe'

# my_answer =>

def swap_name(string)
  "#{string.split[1]}, #{string.split[0]}"
end

p swap_name('Joe Roberts') == 'Roberts, Joe'


# example_of_answer =>
def swap_name(name)
  name.split(' ').reverse.join(', ')
end

