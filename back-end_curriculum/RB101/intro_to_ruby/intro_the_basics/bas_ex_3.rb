# Make a hash of movie titles and output the years

# my_answer =>

movies = {
  :jaws => 1975,                    # jaws : 1975,
  :the_day_after_tomorrow => 2004,  # the_day_after_tomorrow: 2004,
  :captain_philips => 2013,         # captain_philips: 2013
  :a_beautiful_mind => 2001,        # a_beautfiul_mind: 2001,
  :raiders_of_the_lost_ark => 1981  # raiders_of_the_lost_ark: 1981
} 
                
puts movies[:jaws]
puts movies[:the_day_after_tomorrow]
puts movies[:captain_philips]
puts movies[:a_beautiful_mind]
puts movies[:raiders_of_the_lost_ark]
puts ""

puts movies.values