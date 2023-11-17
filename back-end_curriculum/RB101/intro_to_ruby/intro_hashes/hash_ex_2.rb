# Look at Ruby's merge method. Notice that it has two versions.
# What is the difference between merge and merge!?
# Write a program that uses both and illustrate the differences.

# my_answer =>
names_and_ages = {melissa: 54, rose: 43}
colors_and_flowers = { red: "roses", pink: "tulips"}

new_arr= names_and_ages.merge(colors_and_flowers)
puts "This is the new array:"
puts "=> #{new_arr}"
puts "which is a combo of..."
puts "=> #{names_and_ages}"
puts "and"
puts "=> #{colors_and_flowers}"

names_and_ages.merge!(colors_and_flowers)
puts "This is the names_and_ages array after the merge! method:\n=> #{names_and_ages}"
puts "This is the colors_and_flowers array after the merge! method:\n=> #{names_and_ages}"

# example_of_answer =>
cat = {name: "whiskers"}
weight = {weight: "10 lbs"}
puts cat.merge(weight)
puts cat                  # => {:name=>"whiskers"}
puts weight               # => {:weight=>"10 lbs"}
puts cat.merge!(weight)
puts cat                  # => {:name=>"whiskers", :weight=>"10 lbs"}
puts weight               # => {:weight=>"10 lbs"}
