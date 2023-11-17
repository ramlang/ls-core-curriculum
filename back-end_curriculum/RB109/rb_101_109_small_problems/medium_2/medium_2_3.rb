# Write a method that takes a string, and then returns a hash that contains 3 entries: one represents the percentage of characters in the string that are lowercase letters, one the percentage of characters that are uppercase letters, and one the percentage of characters that are neither.

# You may assume that the string will always contain at least one character.

# ANSWER FROM EASY

def letter_percentages(string)
  categories = { lowercase: 0, uppercase: 0, neither: 0 }
  total = string.length.to_f
  categories[:lowercase] = ((string.count "a-z") / total) * 100
  categories[:uppercase] = ((string.count "A-Z") / total) * 100
  categories[:neither] = ((string.count "^A-Z","^a-z") / total) * 100
  categories
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }

# example_of_answer =>
def letter_percentages(string)
  counts = {}
  percentages = {}
  characters = string.chars
  length = string.length

  counts[:lowercase] = characters.count { |char| char =~ /[a-z]/ }
  counts[:uppercase] = characters.count { |char| char =~ /[A-Z]/ }
  counts[:neither] = characters.count { |char| char =~ /[^A-Za-z]/ }

  calculate(percentages, counts, length)

  percentages
end

def calculate(percentages, counts, length)
  percentages[:lowercase] = (counts[:lowercase] / length.to_f) * 100
  percentages[:uppercase] = (counts[:uppercase] / length.to_f) * 100
  percentages[:neither] = (counts[:neither] / length.to_f) * 100
end

# further_exploration =>
# If we passed a string 'abcdefGHI' as an argument to our method call the solution would be {:lowercase=>66.66666666666666, :uppercase=>33.33333333333333, :neither=>0.0}. It would be nicer if we could round these float numbers so that our solution looks like this {:lowercase=>66.7, :uppercase=>33.3, :neither=>0.0}. Try creating that solution on your own.