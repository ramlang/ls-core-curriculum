def shout_out_to(name)
  name.chars.each { |c| c.upcase! }

  puts 'HEY ' + name
end

shout_out_to('you') # expected: 'HEY YOU'


# Why does this code print HEY you instead of HEY YOU?
# my_answer =>
# the variable name has not changed as the `chars` method will return a new array object. This means that the variable `name` will be unaffected by the `each` method. The `each` method is iterating over the new array object, not the original object. The variable name needs to be reassigned to the return value, joined together since the return of `each` would still be an array

# Modify the code so that it produces the expected output.
def shout_out_to(name)
  name = name.chars.each { |c| c.upcase! }.join('')

  puts 'HEY ' + name
end

shout_out_to('you') # expected: 'HEY YOU'


# correct_answer =>
def shout_out_to(name)
  name.upcase!

  puts 'HEY ' + name
end

shout_out_to('you')

# correct_answer =>
def shout_out_to(name)
  puts 'HEY ' + name.upcase
end