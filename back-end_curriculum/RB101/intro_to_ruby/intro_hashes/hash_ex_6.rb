# What's the difference between the two hashes that were created?

x = "hi there"
my_hash = {x: "some value"}
my_hash2 = {x => "some value"}

# my_answer =>
# my_hash uses the new way of creating a key-value, and my_hash2 uses the old way.

# correct_answer =>
# my_hash used the symbol x as a key whereas my_hash2 used the string "hi there"


