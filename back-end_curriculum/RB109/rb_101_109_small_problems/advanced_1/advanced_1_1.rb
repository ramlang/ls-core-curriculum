# Make a madlibs program that reads in some text from a text file that you have created, and then plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text and prints it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program, but the text data should come from a file or other external source. Your program should read this text, and for each line, it should place random words of the appropriate types into the text, and print the result.

# The challenge of this program isn't about writing your program; it's about choosing how to represent your data. Choose the right way to structure your data, and this problem becomes a whole lot easier. This is why we don't show you what the input data looks like; the input representation is your responsibility.

# HINT: One solution to this problem is to use Kernel#format's ability to substitute substrings of the form %{name} in some formatted text. An alternative approach might involve using String#gsub or some other String methods.


# my_answer =>

# PEDAC

# PROBLEM:
# input = text file
# output = string with random words added into appropriate places in the text file

# >> rules:
# - random nouns, verbs, adjectives, adverbs
# - text data is from outside source or file

# >> tasks:
# - read the text file
# - access the randomly generate words 
# - randomly generate a word
# - replace the word in the text file
# - return the string

# EXAMPLES:
# Example output:
# The sleepy brown cat noisily
# licks the sleepy yellow
# dog, who lazily licks his
# tail and looks around.

# Example text data:
# The %{adjective} brown %{noun} %{adverb}
# %{verb} the %{adjective} yellow
# %{noun}, who %{adverb} %{verb} his
# %{noun} and looks around

# Example replacement words:
# adjectives: quick lazy sleepy ugly
# nouns: fox dog head leg
# verbs: jumps lifts bites licks
# adverb: easily lazily noisily excitedly

# DATA STRUCTURE:
# - use a hash to store random words in an array
# - array to randomly sample from
# - string interpolation

# ALGORITHM:
# set up hash with the following keys: noun, verb, adjective, adverb
# set the value of the keys to the example replacement words
# import the needed file and read it
# idenfity the correct key using the string variable name
# convert the name into a symbol
# access the array
# randomly sample the array for a replacement word
# ouput the string
# move on to the next sentence

text = File.read('text_data.txt')
line = 0
text_array = text.split("\n")

loop do 
  random_words = {
    noun: (%w(fox dog head leg).sample),
    verb: (%w(jumps lifts bites licks).sample),
    adjective: (%w(quick lazy sleepy ugly).sample),
    adverb: (%w(easily lazily noisily excitedly).sample)
  }
  
  
  puts format(text_array[line], random_words)
  
  break if line == text_array.size - 1
  line += 1
  
end

# *** time = +60 min ***


# example_of_answer =>
ADJECTIVES = %w(quick lazy sleepy ugly).freeze
NOUNS      = %w(fox dog head leg cat tail).freeze
VERBS      = %w(spins bites licks hurdles).freeze
ADVERBS    = %w(easily lazily noisly excitedly).freeze

File.open('madlibs.txt') do |file|
  file.each do |line|
    puts format(line, noun:      NOUNS.sample,
                      verb:      VERBS.sample,
                      adjective: ADJECTIVES.sample,
                      adverb:    ADVERBS.sample)
  end
end

# uses constants + arrays for data structure
# Kernel#format can take keyword arguments
# iterate over text file by line
