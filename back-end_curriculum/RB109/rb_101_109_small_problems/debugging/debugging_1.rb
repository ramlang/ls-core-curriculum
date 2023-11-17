def decrease(counter)
  counter -= 1
end

counter = 10

10.times do
  puts counter
  counter = decrease(counter)
end

puts 'LAUNCH!'


# correct_answer =>
def decrease(counter)
  counter - 1  # <= reassigning serves no purpose changed to subtraction
end

counter = 10

10.times do
  puts counter
  counter = decrease(counter)  # <= need to assign the return value of the method to counter
end

puts 'LAUNCH!'

# further_exploration =>
# We specify 10 two times, which looks a bit redundant. It should be possible to specify it only once. Can you refactor the code accordingly?

10.downto(1) do |num|
  puts num
end

puts 'LAUNCH!'