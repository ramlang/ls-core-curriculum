# items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   puts "Let's start gathering food."
#   puts "#{items.join(', ')}"
#   puts "Nice selection of food we have gathered!"
# end

items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  yield(items.join(', '))
end

gather(items) do |list|
  puts "Let's start gathering food."
  puts list
  puts "Nice selection of food we have gathered!"
end


# solution
items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yeidl(items)
  puts "Nice selection of food we have gathered!"
end

gather(items) { |produce| puts produce.join('; ') }

gather(items) do |produce|
  puts "We've gathered some vegetables: #{produce[1]} and #{produce[2]}."
end