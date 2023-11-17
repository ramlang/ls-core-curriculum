# We started writing an RPG game, but we already run into an error message.
# Find the problem and fix it.

# Each player starts with the same basic stats.

player = { strength: 10, dexterity: 10, charisma: 10, stamina: 10 }

# Then the player picks a character class and gets an upgrade accordingly.

character_classes = { # my_answer => changed keys to strings
  'warrior' => { strength:  20 },
  'thief' =>  { dexterity: 20 },
  'scout' => { stamina:   20 },
  'mage' =>   { charisma:  20 }
}

puts 'Please type your class (warrior, thief, scout, mage):'
input = gets.chomp.downcase

# player.merge(character_classes[input])
player.merge!(character_classes[input]) # my_answer => destructive merge!

puts 'Your character stats:'
puts player


# example_of_answer =>

player = { strength: 10, dexterity: 10, charisma: 10, stamina: 10 }

character_classes = {
  warrior: { strength:  20 },
  thief:   { dexterity: 20 },
  scout:   { stamina:   20 },
  mage:    { charisma:  20 }
}

puts 'Please type your class (warrior, thief, scout, mage):'
input = gets.chomp.downcase

player = player.merge(character_classes[input.to_sym]) # .to_sym method

puts 'Your character stats:'
puts player