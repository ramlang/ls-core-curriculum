# Write a method that returns true if the word passed in as an argument can be spelled from this set of blocks, false otherwise.

def block_word?(string)
  blocks = { b: 'o', x: 'k', d: 'q', c: 'p', n: 'a', g: 't',
           r: 'e', f: 's', j: 'w', h: 'u', v: 'i', l: 'y', z: 'm' }
  used_blocks = []
  string.downcase.chars.each do |char|
    if used_blocks.include?(char.to_sym) || used_blocks.include?(char)
      return false
    elsif blocks.key?(char.to_sym)
      used_blocks << char.to_sym
    elsif blocks.value?(char)
      used_blocks << char
    end
  end
  true
end

p block_word?('BATCH') #== true
p block_word?('BUTCH') == false
p block_word?('jest') == true


# correct_answer =>
BLOCKS = %w(BO XK DQ CP NA GT RE FS JW HU VI LY ZM).freeze

def block_word?(string)
  up_string = string.upcase
  BLOCKS.none? { |block| up_string.count(block) >= 2 }
end

# further_exploration =>
# Did you use a different data structure for organizing your blocks? Were those blocks 2 letter strings or something else? What method did you use to check if a string had 2 letters from a single block? There are several different possibilities for solving this exercise.