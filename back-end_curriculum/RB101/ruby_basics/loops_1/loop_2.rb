# Modify the code so each loop stops after the first iteration.


loop do
  puts 'This is the outer loop.'

  loop do
    puts 'This is the inner loop.'
    break # my_answer => added break
  end
  break # my_answer => added break
end

puts 'This is outside all loops.'