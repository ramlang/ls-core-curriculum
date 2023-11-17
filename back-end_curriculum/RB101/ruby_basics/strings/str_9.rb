# Given the following code, use Array#each to print the plural of each word in
# words.

words = 'car human elephant airplane'

# my_answer =>

words.split(' ').each do |a|
  puts a + 's'
end

