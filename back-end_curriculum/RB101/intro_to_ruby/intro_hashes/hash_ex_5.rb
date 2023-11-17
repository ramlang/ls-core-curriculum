# What method could you use to find out if a Hash contains a specific value
# in it? Write a program to demonstrate this use.

# my answer => 
# You can use the fetch method to determine if a hash contains a specific key
# or you can use has_value? which will return a boolean.

hash = {:character => "Sora", :level => 20, :hp => 1000, :mp => 50}

puts hash.fetch(:character)
puts hash.include?("Sora")

# example_of_answer =>

#has_value?

if opposites.has_value?("negative")
  puts "Got it!"
else
  puts "Nope!"
end