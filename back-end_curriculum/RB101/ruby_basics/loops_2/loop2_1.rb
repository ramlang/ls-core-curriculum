# Write a loop that prints numbers 1-5 and whether the number is even or odd.
# Use the code below to get started.


# my_answer =>

count = 1

loop do
  if count <= 5
    if count.odd?
      puts "#{count} is odd!"
    else
      puts "#{count} is even!"
    end
  else
    break
  end
  count += 1
end


# example_of_answer =>

count = 1

loop do
  if count.even?
    puts "#{count} is even!"
  else
    puts "#{count} is odd!"
  end

  break if count == 5
  count += 1
end




