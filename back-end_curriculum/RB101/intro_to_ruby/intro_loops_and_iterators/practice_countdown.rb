#countdown
x = gets.chomp.to_i

while x >= 0
  puts x
  x -= 1
end

puts "Done!"


y = gets.chomp.to_i

until y < 0
  puts y
  y -= 1
end

puts "Done!"


x = gets.chomp.to_i

for i in 1..x do
  puts i
end

puts "Done!"


y = [1, 2, 3, 4, 5]

for i in y do
  puts i
end

puts "Done!"