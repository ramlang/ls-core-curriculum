# Given the following code, invoke a destructive method on greeting so that
# Goodbye! is printed instead of Hello!.

greeting = 'Hello!'
puts greeting

# my_answer =>

greeting.replace "Goodbye"
puts greeting


# correct_answer =>

greeting = 'Hello!'

greeting.gsub!('Hello', 'Goodbye')
puts greeting