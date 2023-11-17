# Given the array, turn it into a new array that consists of strings containing
# one word. (ex. ['white snow', etc...] → ['white', 'snow', etc...].
# Look into using map and flatten methods, as well as String's split method.

a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']

# my_answer =>
a.map! { |word| word.split(' ')}
a.flatten!
p a

# example_of_answer =>
a = a.map { |pairs| pairs.split }
a = a.flatten
p a

