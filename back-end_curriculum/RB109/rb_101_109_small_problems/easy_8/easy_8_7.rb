# Write a method that takes a string, and returns a new string in which every character is doubled.
# repeater('Hello') == "HHeelllloo"
# repeater("Good job!") == "GGoooodd  jjoobb!!"
# repeater('') == ''

# my_answer =>
def repeater(string)
  string.chars.map { |char| char * 2 }.join
end

p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''

# example_of_answer =>
def repeater(string)
  result = ''
  string.each_char do |char|
    result << char << char
  end
  result
end

