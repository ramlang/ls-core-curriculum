# Write a method that counts the number of occurrences of each element in a given array.
# The words in the array are case-sensitive: 'suv' != 'SUV'. Once counted, print
# each element alongside the number of occurrences.

# my_answer =>

#PEDAC

# Problem ---
# input is a given array
# output is the elements of the array and number of times the element is present
# in the array.
# implicit requirements = define method for an array of strings
# explicit requirements = case sensitive
# problem domain = determining duplicates within the array, making the method
# case insensitive, keeping count of the duplicates, iterate through the array

# mental model = given an array, examine each element of the array to determine
# if there are multiple occurances of an element. Remove first element to compare elements to each other
# accounting for the difference in upcase and downcase. For each occurance of an
# element add to count. Print the element and number of occurences it has. Use
# a hash to store element and count?


# Example/Test Case ---

=begin
vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)

# expected output: 

car => 4
truck => 3
SUV => 1
motorcycle => 2
=end

# Data Structure ---
# use an array? or use hash?
# #count
# #select
# #delete_at
# #pop



# Algorithm ---
# START
# intitalize hash or array
# intitalize ...
# examine given array
# remove first element of array
# count instances of occurnace in the array
# delete the occurences
# store element in hash as key
# store count in hash as value
# loop back until array is empty
# break loop when last item has been removed from array
# print the element and count

# Code with Intent ---
def count_occurrences(array)
  keys_and_values = {}  
  loop do
    if array.empty?
      break
    else
      element = array.shift
      count = array.count(element) + 1
      array.delete(element)
      keys_and_values[element.to_sym] = count
    end
    keys_and_values
  end
  keys_and_values.each do | key, value |
    puts "#{key} => #{value}"
  end
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)


# correct_answer =>

def count_occurrences(array)
  occurrences = {}

  array.uniq.each do |element|
    occurrences[element] = array.count(element)
  end

  occurrences.each do |element, count|
    puts "#{element} => #{count}"
  end
end