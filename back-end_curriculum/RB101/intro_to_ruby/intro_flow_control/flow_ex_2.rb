# Write a method that changes a string to all caps

# my_answer =>
def capitalize(phrase)
  if phrase.length > 10
    phrase.upcase!
    return phrase
  else
    return phrase
  end
end

puts "Enter a phrase: "
input = gets.chomp

puts capitalize(input)
