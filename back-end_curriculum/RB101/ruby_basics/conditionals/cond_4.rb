# In the code below, boolean is randomly assigned as true or false.

boolean = [true, false].sample

# Write a ternary operator that prints "I'm true!" if boolean equals true and
# prints "I'm false!" if boolean equals false.

# my_answer =>

true_or_false = boolean ? "I'm true!" : "I'm false!"

puts true_or_false


# correct_answer =>

boolean ? puts("I'm true!") : puts("I'm false!")

# Need to have parentheses around the strings or you get an error.