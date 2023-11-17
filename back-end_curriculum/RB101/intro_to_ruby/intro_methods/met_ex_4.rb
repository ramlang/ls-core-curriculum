# What will the following code print to the screen?

def scream(words)
  words = words + "!!!!"
  return
  puts words
end

scream("Yippeee")

# my_answer =>
# This code will not print anything. Return comes before the puts.
