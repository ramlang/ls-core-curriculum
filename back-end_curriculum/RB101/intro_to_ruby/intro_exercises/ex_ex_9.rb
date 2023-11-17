# Suppose you have a hash h = {a:1, b:2, c:3, d:4}

h = {a:1, b:2, c:3, d:4}

# 1. Get the value of key `:b`."

# my_answer =>
puts h[:b]

# example_of_answer =>
h.fetch(:b)

# 2. Add to this hash the key:value pair `{e:5}`

# my_answer =>
h[:e] = 5
puts "#{h}"

# 3. Remove all key:value pairs whose value is less than 3.5

# my_answer =>
h.select! do |key, value|
       value > 3.5
     end
#h.delete_if { |key, value| value < 3.5 }
puts h
