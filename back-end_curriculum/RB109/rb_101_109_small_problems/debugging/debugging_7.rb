def neutralize(sentence)
  words = sentence.split(' ')
  words.each do |word|
    words.delete(word) if negative?(word)
  end

  words.join(' ')
end

def negative?(word)
  [ 'dull',
    'boring',
    'annoying',
    'chaotic'
  ].include?(word)
end

puts neutralize('These dull boring cards are part of a chaotic board game.')
# Expected: These cards are part of a board game.
# Actual: These boring cards are part of a board game.

# We wrote a neutralize method that removes negative words from sentences. However, it fails to remove all of them. What exactly happens?

# my_answer =>
# This is occuring because the `each` method's block is mutating the array as it is being iterated over, however the each method does not account for this and will continue from the index it left off on. This means that boring is skipped over because when dull gets deleted the elements are assigned new indeices and the each method will continue from the word cards. Additionally the each method will return the original array whereas the select method will return those from the array that evaluated to true.

def neutralize(sentence)
  words = sentence.split(' ')
  words.select do |word|
    next if negative?(word)
    word
  end.join(' ')
end

def negative?(word)
  [ 'dull',
    'boring',
    'annoying',
    'chaotic'
  ].include?(word)
end

puts neutralize('These dull boring cards are part of a chaotic board game.')