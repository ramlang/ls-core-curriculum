# solution 
birds = ['crow', 'finch', 'hawk', 'eagle']

def types(birds)
  yield birds
end

types(birds) do |_, _, *raptors|
  puts "Raptors: #{raptors.join(', ')}."
end

# for our solution we start with an array named birds. It contains four birds where two of them are raptors. Above we use our block variables to organize it further. When we yeild to the block, Ruby assigns the individual elements of birds to the different block variables. It assigns the first two birds "crow" and "finch" to _; the underscore tells Ruby we aren't interested in those values. The splat operator on the name block variable tells Ruby to treat it as an Array and assign all remaining arguments to it. Here we group the last two elementsfrom birds into the array raptors.