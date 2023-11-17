# Write a while loop and end when user types STOP.

# my_answer =>

puts "Ready...set..."
user = gets.chomp
count = 0

while(user != "STOP") do
  count += 1
  puts "#{count}..."
  print "Keep going? "
  user = gets.chomp
end

# example_of_answer =>

x = ""
while x != "STOP" do
  puts "Hi, How are you feeling?"
  ans = gets.chomp
  puts "Want me to ask you again?"
  x = gets.chomp
end