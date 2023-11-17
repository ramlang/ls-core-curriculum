# Write a program that reads the content of a text file and then prints the longest sentence in the file based on number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). Any sequence of characters that are not spaces or sentence-ending characters should be treated as a word. You should also print the number of words in the longest sentence.

text = File.read('sample_text.txt')
sentences = text.split(/\.|\?|!/) # .gsub()

longest_sentence = ''
sentences.each do |sentence|
  sent_array = sentence.split(' ')
  if sent_array.size > longest_sentence.size
    longest_sentence = sent_array
  end
end

# p longest_sentence.size

# iterate over each sentence
# if the sentence is longer than the previous one, set as new largest sentence
# else ignore the sentence
# return the longest sentence


# correct_answer =>

text = File.read('gutenberg.txt')
sentences = text.split(/\.|\?|!/)
largest_sentence = sentences.max_by { |sentence| sentence.split.size }
largest_sentence = largest_sentence.strip
number_of_words = largest_sentence.split.size

puts "#{largest_sentence}"
puts "Containing #{number_of_words} words"


# further_exploration =>
# You may have noticed that our solution fails to print the period at the end of the sentence. Can you write a solution that keeps the period printed at the end of each sentence?

# What about finding the longest paragraph or longest word? How would we go about solving that problem?