# Modify the following code so that double-quotes are used instead of
# single-quotes.

puts 'It\'s now 12 o\'clock.'

# my_answer =>

puts "It's now 12 o'clock."


# example_of_answer =>

# Single-quotes don't allow for escape sequences
# %Q is an alternative to double-quoted strings. There's also an alternative
# for single-quoted strings: %q.

%Q(It's now 12 o'clock.) # => "It's now 12 o'clock."