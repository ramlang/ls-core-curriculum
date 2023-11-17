# Use each_with_index method to iterate over and print an array and index

# my_answer =>
days_of_work_week = ["Monday", "Tuesady", "Wednesday", "Thursday", "Friday"]

days_of_work_week.each_with_index { |v, i| p "At index: #{i} the day is: #{v}" }

# example_of_correct_answer =>
top_five_games = ["mario brothers",
                  "excite bike",
                  "ring king",
                  "castlevania",
                  "double dragon"]

top_five_games.each_with_index do | game, index |
  puts "#{index + 1}. #{game}"
end