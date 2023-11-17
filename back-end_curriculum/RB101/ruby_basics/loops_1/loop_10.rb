# Your friends just showed up! Given the following array of names, use a for
# loop to greet each friend individually.

# my_answer =>

friends = ['Sarah', 'Jason', 'Greg', 'Wirt']

for name in friends do
  puts "Hello, #{name}!"
end


# example_of_answer =>

friends = ['Sarah', 'John', 'Hannah', 'Dave']

for friend in friends
  puts "Hello, #{friend}!"
end

# When naming variables in a for loop it's typical to use the standard format:
# for friend in friends, for cat in cats, etc. This makes it clear that we're
# iterating over friends and doing something with each friend.