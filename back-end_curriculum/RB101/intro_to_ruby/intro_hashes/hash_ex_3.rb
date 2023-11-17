# Using some of Ruby's built-in Hash methods, write a program that
# loops through a hash and prints all of the keys. Then write a program
# that does the same thing except printing the values. Finally, write a
# program that prints both.

# my_answer =>
foods = { fruit: "apples", vegetables: "carrots" }

foods.each_key { |key| puts "I like eating #{key}." }
foods.each_value { |value| puts "I put #{value} in my smoothies." }
foods.each { |key, value| puts "There are many types of #{key}. I really love #{value}!" }

