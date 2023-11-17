# Modify your program so it prints an error message for any inputs that aren't
# y or n, and then asks you to try again. Keep asking for a response until you
# receive a valid y or n response. In addition, your program should allow both
# Y and N (uppercase) responses; case sensitive input is generally a poor user
# interface choice. Whenever possible, accept both uppercase and lowercase inputs.

# my_answer =>

loop do
  puts "Would you like me to print something? (y/n) "
  answer = gets.chomp

  if answer == 'y'
    puts "...something"
    return
  elsif answer == 'n'
    return
  else
    puts "Try answering again! "
  end
end 


# example_of_answer =>


choice = nil
loop do
  puts '>> Do you want me to print something? (y/n)'
  choice = gets.chomp.downcase
  break if %w(y n).include?(choice)
  puts '>> Invalid input! Please enter y or n'
end
puts 'something' if choice == 'y'