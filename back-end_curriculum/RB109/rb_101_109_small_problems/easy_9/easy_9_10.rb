# Write a method which takes a grocery list (array) of fruits with quantities and converts it into an array of the correct number of each fruit.
# buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
#   ["apples", "apples", "apples", "orange", "bananas","bananas"]
  
def buy_fruit(nested_array)
  list = []
  nested_array.each do |items|
    items[1].times { list << items[0] }
  end
  list
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]
  
  
# example_of_answer =>
def buy_fruit(list)
  expanded_list = []

  list.each do |item|
    fruit, quantity = item[0], item[1]
    quantity.times { expanded_list << fruit }
  end

  expanded_list
end

# example_of_answer =>
def buy_fruit(list)
  list.map { |fruit, quantity| [fruit] * quantity }.flatten
end