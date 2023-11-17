# Timed reworking of Small Problems exercises Easy
=begin
# --- Easy 1 ---

def repeat(string, num)
  num.times { puts string }
end

repeat('Hello', 3)
# problem finish: 1m 38s

# => The method `repeat` is defined on lines 1 - 3 and accepts two parameters: `string` and `num`. When the method `repeat` is called on line 9 the String object 'Hello' and Integer 3 are passed as arguments to the methhod. These objects are assigned to the corresponding parameter values. Within the method definition the `times` method is invoked upon the object the `num` parameter points to, in this case `3`. The block that is passed as an argument to the method will execute `3` times. In the block the object `string` points to is being passed to the `puts` method as an argument. This will output the value `'Hello'` and the return of `puts` is `nil`. The code will print out `'Hello'` three times and return `nil`. 
# explaination finish: 7m 5s

# ---------

def is_odd?(num)
  num % 2 != 0
end

# further_exploration =>
# def is_odd?(num)
#   num.remainder(2) != 0
# end

puts is_odd?(2) == false
puts is_odd?(5) == true
puts is_odd?(-17) == true
puts is_odd?(-8) == false
puts is_odd?(0) == false
puts is_odd?(7) == true
# problem finish: 3m 32s

# => The `is_odd?` method is defined on `lines 17 -19` and accepts one parameter: `num`. Within the method the modulus of `num` is taken, which will return the remainder of the division of the two integers. A not equal operator is used to compare the two integers and will return a boolean once the expression is evaluated. If the modulo of the expression is not equal to zero, this means that 2 does not divide evenly and is an odd number. If the modulo of the expression is equal to zero then the number 2 divides evenly then the expression will return false.
# explaination finish: 7m 19s

# ---------

def digit_list(num)
  num.to_s.chars.map { |n| n.to_i }
end

puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true
# problem finish: 5m 45s

# => `Lines 39 - 41` define the `digit_list` method. This method accepts one parameter `num`. Within the method the `to_s` method is being called on the integer object `num` is referencing and returns a string object. This new string object has the `chars` method invoked upon it which creates an array of each single character substrings. The `map` method is used to iterate over the new array object and uses the block it is passed as an argument. The block has a parameter `n` that represents each element within the array. The object `n` points to has the `to_i` method called on it which will return an integer from the block. The `map` method returns a new array, and the array will contain the returned integers from the block. This will output an array of integers equal to each digit of the original integer value passed to `digit_list`.
# explaination finish: 7m 8s

# ---------

def count_occurrences(array)
  array.uniq.each do |elem|
    puts "#{elem} => #{array.count(elem)}"
  end
end

# further_exploration =>
# def count_occurrences_2(array)
#   downcase_array = array.map(&:downcase)
#   downcase_array.uniq.each do |elem|
#     puts "#{elem} => #{downcase_array.count(elem)}"
#   end
# end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]


p count_occurrences(vehicles)
# p count_occurrences_2(vehicles)
# problem finish: 4m 31s

# => The method `count_occurances` is defined on `lines 54 - 58` and takes on parameter: `array`. On `line 74` the method is being called and the variable `vehicles` that points to an array object is passed in as an argument. `Vehicles` is assigned to the parameter `array` and they become aliases. Within the method the `uniq` method is called on the object `array` points to. This method removes duplicate values from an array object and returns a new array, since it is non destructive. The `each` method is called on this newly returned array and passed a `do..end` block as an argument. This block contains a parameter `elem` which represents the values of the array object. Next the `puts` method is called and passed in a string object as an argument. This string object contains interpolation of `elem` and `array.count(elem)`. The `count` method is being called on the unmodfied object `array` references. This method is passed `elem` as an argument and will count the number of times `elem` is present within the array and return an integer. The each block will return nil, but the each method will return the original array.uniq. The output of the method will the the puts strings and the return will be nil.
# explaination finish: 8m 0s

# ---------

def reverse_sentence(string)
  string.split(' ').reverse.join(' ')
end

puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == '' # Any number of spaces results in ''
# problem finish: 1m 52s

# => The method `reverse_sentence` is defined on `lines 84 - 86` and accepts a single parameter: `string`. The object the `string` argument references has the `split` method called on it, and an argument `' '` passed to it, which is actually unnecssary according to the correct answer. This argument determines how to split the string into substrings, but the default is to split by whitespace so the argument wasnt needed. This method returns an array of strings. The `reverse` method is called on this returned array, and it returns a new array object with the elements in the reverse order from the original array given. The new array has the method `join` called on it which will return a string with the elements joined together by the argument passed to it, in this case `' '`. The return value for this method is the return of this method chaining since it is the only line of code, which is a new string object.
# explaination finish: 5m 31s

# ---------

# Write a method that takes one argument, a string containing one or more words, and returns the given string with words that contain five or more characters reversed. Each string will consist of only letters and spaces. Spaces should be included only when more than one word is present.

def reverse_words(string)
  string.split.map do |word|
    if word.length >= 5
      word.reverse 
    else
      word
    end
  end.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS
# problem finsih: 4m 49s

# => On `lines 100 - 108` the `reverse_words` method is defined. It accpets one parameter `string`. The object the `string` argument references has the `split` method invoked on it which will return an array of substrings. This new returned array then has the `map` method called on it and is passed an `do..end` block as an argument. The block has a parameter `word` that will be assigned to the object the array index if referencing. A conditional statement within the block calls the `reverse` method on the object `word` references if the object length is greater than 5. Obtaining the length is done by the `length` method which will count the characters of the object. If the object is not longer than 5 characters than the object is returned without any changes. The block returns either a normal word or reversed word. The `map` method returns an array of the returned values. The `join` method is called on this newly returned array and the elements are joined together by whitespace and a string is returned. This gives us the desired output.
# explaination finish: 5m 12s

# ---------

def stringy(int)
  string = ''
  int.times do
    if string.empty? || string.chars.last == '0'
      string += '1'
    else
      string += '0'
    end
  end
  string
end

# further_exploration =>
# def stringy_2(int, optional= 1)
#   string = optional.to_s
#   (int - 1).times do
#     if string.empty? || string.chars.last == '0'
#       string += '1'
#     else
#       string += '0'
#     end
#   end
#   string
# end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'

puts stringy_2(6, 0)
puts stringy_2(9, 0)
# problem finsih: 9m 45s

# => The method `stringy` is defined one `lines 120 - 130`. It accepts one parameter `int`. On `line 121` of the method the variable `string` is initialized and assigned to an empty string object `''`. On `line 122` the `times` method is called on the object `int` references and is passed a block as an argument. Within the block a conditional with the parameter `string.empty? || string.chars.last == '0'` is given. The conditons are if the `empty` method called on the object `string` references returns true or if after calling `chars` on the string object is the array that is returned after having the `last` method called, returning a '0' value. If either are true it means the object `string` points to is empty or the variable `string` ends with a zero. If this is true `string` is reassigned to `string + '1'`. If the condition is not true then string will be reassigned to `string + 0`. The return value of the method is the string after the `times` method executes the block the given number of times. Returns a new string object.
# explaination finish: 7m 26s

# ---------

def average(array)
  array.sum / array.size
end

puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) == 25
puts average([9, 47, 23, 95, 16, 52]) == 40
# problem finish: 1m 29s

# => The method `average` is defined on `lines 159 -161` and accepts one parameter `array`. On `line 160` the object `array` points to has the `sum` method invoked on it. This will return the sum of the elements of the array object. Then the `/` method is called an integer division is performed taking the returned value representing the sum and dividing it by the `size` method called on the object `array` points to, which will also return an integer. Since this is the only line of code within the method, the return of the integer divison will be returned from the method. This value represents the average of the values within the array object given.
# explaination finsih: 3m 50s

# ----------

def sum(number)
  number.to_s.chars.map(&:to_i).reduce { |sum, n| sum + n }
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45
# problem finsih: 3m 51s

# => `Lines 173 - 175` define the method sum which takes one parameter: `number`. On `line 74` the object number references has `to_s` invoked on it which will return a string. This new string object will have `chars` invoked upon it and will return an array of substrings. The array of substrings will have the `map` method called on it and will iterate over each element and call the `to_i` method. This will return an integer from the block and the `map` method will return an array of integers. Lastly the `reduce` method is called on the array of integers. The `reduce` method is passed a block. The block has two parameters that represent the sum and each element of the array. This method will return the final value of sum, and this will represent the original numbers' digits summed.
# explaination finish: 5m 22s

# ---------

def calculate_bonus(salary, bonus)
  return salary / 2 if bonus
  return 0
end

puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000
# problem finish: 2m 18s

# => The `calculate_bonus` method is defined on `lines 190 -193`. It accepts two parameters `salary` an integer and `bonus` a boolean. On `line 191` a conditional is given that if `bonus` is `true` then return `salary / 2`, which divides the object `salary` is pointing to by the argument passed to the divison operator `2`. Otherwise the method should return the integer `0` (`line 192`), which would be when `bonus` is `false. This method gives us the desired output of the bonus being half the salary and if no bonus is given then the method returns 0.
# explaination finish: 3m 13s

# --- Easy 2 ---

def teddys_age
  age = rand(20..200)
  puts "Teddy is #{age} years old!"
end

teddys_age

# further_exploration =>
# def teddys_age(name= 'Teddy')
#   age = rand(20..200)
#   puts "#{name} is #{age} years old!"
# end

# teddys_age()
# problem finish: 2m 17s

# => `Lines 202 - 205` define the teddys_age method. This method does not take any parameters. On `line 203` the variable `age` is initialized and assigned to the return value of the `rand` method. The `rand` method has a range as an argument `20..200` which means all numbers between 20 and 200 and including 200. The `rand` method will return a random integer between the given range. On `line 204` the puts method is called and passed a string object as an argument. Within the string ruby syntax `#{}` allows for the variable age to be called. The method outputs the string object and the return of the method is nil, since the `puts` method is the last line of the method and it returns `nil`.
# explaination finished: 4m 44s

# ---------

METERS_TO_FEET = 10.7639

def room_size
  puts "Enter the length of the room in meters: "
  length = gets.chomp.to_i
  
  puts "Enter the width of the room in meters: "
  width = gets.chomp.to_i
  
  area_in_meters = length * width
  area_in_feet = area_in_meters * METERS_TO_FEET
  puts "The area of the room is #{area_in_meters}" +
       " square meters (#{area_in_feet.round(2)} square feet)."
end

room_size
# problem finish: 5m 53s

# further_exploration =>
# FEET_TO_INCHES = 144
# INCHES_TO_CENTI = 6.4516

# def room_size_feet
#   puts "Enter the length of the room in feet: "
#   length = gets.to_f
  
#   puts "Enter the width of the room in feet: "
#   width = gets.to_f
  
#   area = length * width
#   area_inches = area * FEET_TO_INCHES
#   area_centimeters = area_inches * INCHES_TO_CENTI
#   puts "The area of the room is #{area.round(2)}" +
#       " square feet, #{area_inches.round(2)} square inches," +
#       " and #{area_centimeters.round(2)} square centimeters"
# end

# room_size_feet

# => `Line 223' initializes the constant `METERS_TO_FEET` and assignes it to the integer obejct `10.7639`. `Lines 225 -236` define the `room_size` method which does not accpet any parameters. On `line 262` the `puts` method is called and passed a string object as an argument. The method will output this string. On `line 263` the variable `length` is initialized and assigned to the return value of the `gets` method, `chomp` method, and `to_i` method. The `gets` method will return string input from the user, and `chomp` being called on this string object will remove the `newline` character or carraige return from the end. It will return a new string that will then have the `to_i` method called on it. This will return an integer. The same process is repeated on `lines 265 - 266`. On `lines 268` the objects length and width reference are multiplied together with the `*` operator. The return value is assigned to the variable `area_in_meters` that is initialized on the same line. Next `area_in_feet` is initialized to the return value of `area_in_meters` multipled by the object the `METERS_TO_FEET` constant references. The variables are called within the string in the last line of the method. The string object is passed to puts which will output the string object and include the desired results.
# explaination finish: 8m 14s

# ---------

def tip_calculator
  print "What is the bill? "
  bill = gets.to_f
  
  print"What is the tip percentage? "
  tip_percent = gets.to_f / 100
  
  tip_amount = bill * tip_percent
  
  puts "The tip is #{tip_amount}"
  puts "The total is #{bill + tip_amount}"
end

tip_calculator
# problem finish: 4m 0s

# further_exploration =>
# puts format("The tip is %.2f", tip_amount)

# => `Lines 267 - 278` define the `tip_calculator` method which does not have any parameters. On `line 268` the print method is passed a string object which it ouputs. On `line 269` the variable `bill` is initialized and assigned to the return value of the `gets` method, and `to_f` method. The `gets` method will return a string value that is the user input and the `to_f` method called on this string object will return a float value. The same is repeate on `lines 271 -272` however the value returned from `to_f` is divided by the integer 100. On `line 274` the variable `tip_amount` is initialized to the return value of the object bll references multiplied by the object `tip_precent` references. The last lines of the method out the results using the `puts` method having string objects passed as arugments and using string interpolation, which allows for variables to be called from within the string. 
# explaination finish: 4m 53s

# ---------

def retirement
  t = Time.now
  print "What is your age? "
  age = gets.to_i
  
  print "At what age would you like to retire? "
  retire_age = gets.to_i
  
  years_to_go = retire_age - age
  
  puts "It's #{t.year}. You will retire in #{t.year + years_to_go}"
  puts "You only have #{years_to_go} years of work to go!"
end

retirement
# problem finish: 6m 27s

# => The `retirement` method is defined on `lines 291 - 303` and it does not have any parameters. On `line 292` the variable `t` is initialized and assigned to a new Time object. On `line 293` the print method is called and passed a string object as an argument. It outputs this string object. The variable `age` is initialized on `line 294` and assigned to the return value of `gets` and `to_i`. The `gets` method will return a string from the user input and the `to_i` method will be called on this string. This will return an integer. The same process is repeated on `lines 296 - 297`. On `linr 299` the variable `year` is initialized and assigned to the return value of the object `retire_age` references subtracted by the object `age` references. This will result in an integer being returned since both variables points to integer objects. The last lines of the method call the `puts` method and are passed string objects as argumments. This string objects use string interpolation to reference the variables within the string, and the string objects themselves get outputted. The method itself will return nil since the last line of the method calls `puts` which returns `nil`. 
# explaination finish: 6m 57s

# ---------

def excited_greeting
  print "What is your name? "
  name = gets.chomp
  
  if name.chars.last == '!'
    puts "HELLO #{name.chop.upcase}. WHY ARE WE SCREAMING?"
  else
    puts "Hello #{name}."
  end
  
end

excited_greeting
# problem finish: 8m 46s

# further_exploration =>
# print 'What is your name? '
# name = gets.chomp!

# if name[-1] == '!'
#   puts "HELLO #{name.chop!.upcase}. WHY ARE WE SCREAMING?"
# else
#   puts "Hello #{name}."
# end

# =>`Lines 321 - 331 define the `excited_greeting` method which does not have any parameters. On `line 322` the print method is called and passed a string object as an argument. This string object will be output. Then on `line 323` the variable `name` is initialized and assigned to the return value of the `gets` and `chomp` method. The `gets` method returns a string of user input and the `chomp` method returns a new string with the newline character removed. A conditional statement is presented on `line 325` that is the object variable `name`00 points to, having the `chars` method called that will return an array of substrings, and the new array object having the `last` method called on it, will return the last character of `name`. If that last character is equal to the given string then we will call `puts` on the first string object. Otherwise we will call `puts` on the second string object. The method will return `nil`, but the output will be a sting object depending on whether the condition is met or not.
# explaination finish: 5m 44s

# ---------

def odd_numbers
  (1..99).each do |n|
    puts n if n % 2 != 0
  end
end

odd_numbers
# problem finish: 2m 42s

# further_exploration =>
1.upto(99) { |n| puts n if n.odd? }

# => The method `odd_numbers` is defined on `lines 346 - 350` and does not have any parameters. An array object has the `each` method called on it on `line 347`. The `do..end` alongside the `each` method invocations defines a block. This block has one parameter `n` passed in. This parameter `n` represents each value within the `range`. Within the block a conditional statement is given. if the object `n` references modulus `2` is not equal to `0` then the `puts` method should be called and passed `n`. The value will be output and then the each block will iterate to the next value.
# explaination finish: 7m 8s

# ---------

# Print all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

def even_numbers
  1.upto(99) { |n| puts n if !n.odd? }
end

even_numbers
# problem finish: 1m 39s

# => The method `even_numbers` is defined on `lines 362 - 364` and takes no parameters. On `line 363` the integer object `1` has the method `upto` invoked on it, and the method is passed `99` as an argument. This method will iterate over each value up to the given argument. The `{}` define a block that is also an argument for the `upto` method. The block has one parameter `n` that represents the current integer value of the current iteration. The conditional statement within the block called the `odd?` method upon the object `n` references and will return a boolean value. The bang in front of the expression will return the opposite boolean value of that which is returned from the `odd?` method. Thus if a number is odd, it will return true and the bang will return false. This means only even number will cause this expression to return true. When it does return true the `puts` method is called and passed `n` as an argument. This will output the even numbers.
# explaination finish: 5m 45s

# ---------

def sum_or_product
  num = 0
  operation = ''
  
  loop do
    print "Please enter an integer greater than 0: "
    num = gets.to_i
    break if num > 0
  end
  
  loop do
    print "Enter 's' to compute the sum, 'p' to compute the product: "
    operation = gets.chomp.downcase
    break if operation == 's' || operation == 'p'
  end
  
  s_sum = 0
  p_sum = 1
  
  1.upto(num) do |n|
    s_sum += n
    p_sum *= n
  end
  
  if operation == 's'
    puts "The sum of the integers between 1 and #{num} is #{s_sum}"
  else
    puts "The product of the integers between 1 and #{num} is #{p_sum}"
  end
end

sum_or_product
# problem finish: 8m 37s

# further exploration =>
(1..num).inject(:+) 
(1..num).inject(:*)

# => The variable `num` is initialized on `line 375` and assigned to the value 0. On `line 376` the variable `operation` is assigned to an empty string object. The loop method is called and the `do..end` following the `loop` invocation defines a new block. Within the block the `print` method is called and passed a string object as an argument. On `line 380` variable `num` is reassigned to the return of `to_i` invoked on the return of the `gets` method. The `gets` method returns user input and the `to_i` method returns that value an an integer. On `line 381` the loop should `break` if the object `num` references is greater than the value of 0. Once the loop breaks a similar loop is begun and eventually that loop breaks when the `operator` variable points to a value that is either 'p' or 's'. Next on `lines 390 - 391` the variable `s_sum` is intialized and assigned to 0. The variable `p_sum` is also initialized and assigned to the value of 1. On `line 393` the `upto` method is called on the integer `1` and passed `num` as an argument.The `do..end` following the `upto` invocation is also a new block. This new block has a parameter that will be assigned to the value of the current iteration. Within the block the variables `p_sum` and s_sum` are reassigned to themselves plus/multiplied by the current argument `n`. Lastly, the condtional at the end will output the appropriate string object depending on the value of operation. 
# explaination finish +10m 0s

# ---------
name = 'Bob'
save_name = name
name = 'Alice'
puts name, save_name

# => The variable `name` is initialized on `line 416` and assigned to the string object with the value `Bob`. On `line 417` the variable `save_name` is initialized and assigned to the same object the `name` variable references. Then on `line 418` the variable `name` is reassigned to the string object with the value `Alice`. The variable `name` now points to a different object than it did before. On `line 419` the `puts` method is called and `name` and `save_name` are passed in as arguments. The output will be 'Alice' and 'Bob'.

name = 'Bob'
save_name = name
name.upcase!
puts name, save_name

# => The variable `name` is initialized on `line 423` and assigned to the string object with the value `Bob`. On `line 424` the variable `save_name` is initialized and assigned to the same object that variable `name` references. On `line 425` the `upcase!` method is invoked on the object `name` references. Since this method is destructive it will modify the original object. Because both `name` and `save_name` point to the same object, both values will now reference the string object 'BOB'.

# ---------

array1 = %w(Moe Larry Curly Shemp Harpo Chico Groucho Zeppo)
array2 = []
array1.each { |value| array2 << value }
array1.each { |value| value.upcase! if value.start_with?('C', 'S') }
puts array2

# => On `line 432` the variable `array1` is initialized and assigned the the Array object `%w(Moe Larry Curly Shemp Harpo Chico Groucho Zeppo)`. On `line 433` the variable array2 is initialized and assigned to an empty Array object. On `line 434` the each method is invoked on the object `array1` references and the `{}` next to it indicate the block being passed to it as an argument. The block has a parameter `value` that is assigned to the elements of the array as the array is iterated over. The `<<` method is called on the empty array object `array2` references and is passed `value` as an argument. This method appends the object `value` references to the Array object `array2` points to. On `line 435` the `each` method is called again on the object `array1` points to. This time within the block `value` has the `upcase!` method invoked upon it only if the return of the expression `value.start_with?('C', 'S')` is true. The `start_with?` method is called on the object `value` references and determines if the first character is either of the arguments passed to the method `C` or `S`. Lastly on `line 436` the puts method is called and passed `array2` as an argument. Which will output each name on a different line. The result should be: Moe Larry CURLY SHEMP Harpo CHICO Groucho Zeppo. This is because `upcase!` is a destructive method and the objects value references are the same in both arrays. 
# explaination finish: 10m 0s

# further_exploration =>
# This could become troublesome if you did not want the first array to be modified. You could fix this by making copies of the array, or by using the non-destructive `upcase` method.

# --- Easy 3 ---

def search_numbers
  place = ['1st', '2nd', '3rd', '4th', '5th', '6th']
  values = []
  place.map do |n|
    puts "Enter the #{n} number: "
    num = gets.chomp
    values << num
  end
  
  last_num = values.pop
  if values.include?(last_num)
    puts "The number #{last_num} appears in #{values}."
  else 
    puts "The number #{last_num} does not appear in #{values}."
  end
end 

search_numbers
# problem finish: 8m 50s

# => The variaible `place` is initialized on `line 447` and assigned to the array object `['1st', '2nd', '3rd', '4th', '5th', '6th']`. The variable `values` is initialized and assigned to an empty array object on `line 448`. On `line 449` the method `map` is invoked on the object `place` references. The `do..end' block following the method call indicates a block is passed in as an argument to the method. The block itself has a parameter `n` which is assigned an array element upon each iteration. The `puts` method is called on the next line and it is passed a string object as an argument. This string object will be output. On `line 451` the variable `num` is initialized and assigned to the return value of `chomp` being called on the `gets` method which will be a string. On the next line the `<<` method is invoked on the object `values` references. The `<<` method takes `num` as an argument and appends the value of `num` to the array object `value` points to. This will repeat upon every iteration. On `line 455` the variable `last_num` is initialized and assigned to the return value of `pop` method called on the object `values` references. The `pop` method removes and returns the last element of the array object. The conditional on the next line will execute if the `include?` method called on the object `values` references returns truw when passed the object `last_num` points to as an argument. If `last_num` equals any of the elements within the Array object it will return true. Then `puts` will be called and the passed in string object will execute. If not then the else condition will execute which also is a `puts` method with a string object.
# explaination finish 8m 3s

# ---------

def arithmetic
  puts "Enter the first number: "
  num_1 = gets.to_i
  
  puts "Enter the second number: "
  num_2 = gets.to_i
  
  puts "#{num_1} + #{num_2} = #{num_1 + num_2}"
  puts "#{num_1} - #{num_2} = #{num_1 - num_2}"
  puts "#{num_1} * #{num_2} = #{num_1 * num_2}"
  puts "#{num_1} / #{num_2} = #{num_1 / num_2}"
  puts "#{num_1} % #{num_2} = #{num_1 % num_2}"
  puts "#{num_1} ** #{num_2} = #{num_1 ** num_2}"
end

arithmetic
# problem finish 3m 56s

# => The`puts` method is called on `line 472` and is passed a string object as an argument. This will be ouput. On the next line the variable `num_1` is initialized and assigned to the return value of `to_i` called on the return value of the `gets` method, which a string object of the user input. The user input having `to_i` called on it will return an integer that the variable `num_1` can reference. These two lines of code are essentially repeated on `lines 475 - 476`. On `lines 478 - 483` the puts method is called and passed a string object as an argument. The string object contains mutliple instances of string concatenation. The objects the variables reference are called within the string and even have an operator method called that returns an integer result of that operation. All these string arguments are then output
# explaination finish 5m 58s

# ---------

def number_of_characters
  print "Please write word or multiple words: "
  string = gets.chomp
  count = string.split.join.length
  
  puts "There are #{count} characters in \"#{string}\""
end

number_of_characters
# problem finish: 4m 14s

# => The `print` method is called on `line 495` and is passed a string object as an argument. This prompts the user to enter input. The variable `string` is intialized on `line 496` and is assigned to the return value of `chomp` invoked on the return value of the method `gets`. The `gets` method will return a string of the user input and the `chomp` method will return a new string without any carraige return at the end. On `line` 497` the variable `count` is intialized and is assigned to the return value of several methods chained together. The first method `split` is called on the object string is references and returns a new array of substrings split by whitespace. The next method called on the Array object is `join` which returns a new string object of the elements in the array combined together. Lastly the `length` method is called on the new string object and will return an integer that represents the number of characters within the string. The last line of the method calls `puts` and passes another string object as an argument which will output the results using string concatenation.
# explaination finish: 5m 7s

# ---------

# Create a method that takes two arguments, multiplies them together, and returns the result.
def multiply(num_1, num_2)
  num_1 * num_2
end

p multiply(5, 3) == 15
# problem finish: 0m 45s

# further_exploration =>
#p multiply([1, 2, 3], 3)
# => the elements within the array are appended in order the amount of times the original array is being multiplied and a new array is returned.

# => The `multiply` method is defined on `lines 511 - 513` and it has two parameters `num_1` and `num_2`. On `line 512` the object that variable `num_1` references and the object that variable `num_2`references are multipled together with the multplication operator, and an integer value is returned. Since this is the last line of the method it will be returned from the method as well. On `line 515` the `multiply` method is invoked and passed `5` and `3` as argument. `num_1` is assigned to the argument '5' and the same for the second parameter. The objects are then multipled together and the integer 15 is returned.
# explaination 4m 4s

# ---------

def multiply(num_1, num_2)
  num_1 * num_2
end

def square(num)
  multiply(num, num)
end

p square(5) == 25
p square(-8) == 64
# problem finish: 1m 33s

# further_exploration =>
def power_to_the(num, pow)
  total = 1
  pow.times do |n|
    total = multiply(total, num)
  end
  total
end
  
p power_to_the(3, 3)
p power_to_the(5, 3)

# => The `square` method is defined on `lines 531 - 533` and has one parameter. On `line 532` the `multiply` method is called and passed the value referenced by the variable `num` for both arguments. The values are assigned to `num_1` and `num_2` of the `multiply` method respectively. In the method the objects the variables reference are multipled together and an integer value is returned. This value is returned from the method and is also returned from the `square` method.
# explination finish 2m 59s

# ---------

def xor?(value_1, value_2)
  return false if value_1 == value_2
  true
end

p xor?(5.even?, 4.even?) == true
p xor?(5.odd?, 4.odd?) == true
p xor?(5.odd?, 4.even?) == false
p xor?(5.even?, 4.odd?) == false
# problem finish: 6m 1s

# further_exploration =>
# The xor method does not perform short circuit evaluation because in order to determine if only one value is true it needs to examine both values.

# => The `xor?` method is defined on `lines 556 - 559` and has two parameters `value_1` and `value_2`. `Line 557` evaluates the expression `value_1 == value_2`, and if this is true the method should return `false`. Otherwise the method will return `true`. This method returns `true` or `false` depending on th argument given.
# explaination finish: 1m 58s

# ---------

def oddities(array)
  odd_array = []
  ind = 1
  array.each do |elem|
    odd_array << elem if ind.odd?
    ind += 1
  end
  odd_array
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []
# problem finish: 4m 37s

# further_exploration =>
# def evensies(array)
#   even_array = []
#   ind = 0
#   array.each do |elem|
#     odd_array << elem if ind.even? || ind == 0
#     ind += 1
#   end
#   even_array
# end

# further_exploration =>
# array.select do |elem|
#   index += 1
#   index.odd?
# end

# => The variable `odd_array` is initialized on on the first line of the method and assigned to an empty Array object. The second line of the method has the variable `ind` initialzied and assigned to the value 1. The `each` method is invoked on the object `array` references and the `do...end` block following the method invocation represents a block being passed in as an argument. The block has a parameter elem which is assigned to the values of the array as each iterates over it. Within the block the `<<` method is called on the object `odd_array` references and passed the object `elem` references as an argument. However, this only occurs is the expression `ind.odd?` returns true. The `odd?` method called on the object `ind` references will return a boolean value based on whether or not the object `ind` references is odd or not. On the following line the variable `ind` is reassigned to the object it currently references, an integer, plus the value of 1. The `ind` variable now points to a new object and will be incremented with each iteration. The last line of the method is the `odd_array` variable which will have the mehtod return the array object it points to.
# explaination finish 5m 36s

# ---------

def palindrome?(string)
  string == string.reverse
end

p palindrome?('madam') == true
p palindrome?('Madam') == false          # (case matters)
p palindrome?("madam i'm adam") == false # (all characters matter)
p palindrome?('356653') == true
# problem finish: 2m 29s

# further_exploration =>
def palindrome?(value)
  value == value.reverse
end

p palindrome?([1, 2, 3, 2, 1]) == true

# => The `palindrome?` method is defined on `lines 614 - 616` and has one parameter. On `line 615` the object the argument `string` references is compared using the `==` operator/method to the object `string` references with the `reverse` method invoked upon it. The return value of the `reverse` method should be the same object as the caller. If the expression evaluates to true then the method will return true.
# explaination finish 2m 59s

# ---------

ALPHABET = ('a'..'z').to_a
NUMBERS = (0..9).to_a

def palindrome?(value)
  value == value.reverse
end

def real_palindrome?(string)
 array = string.downcase.chars.select do |char|
   ALPHABET.include?(char) || NUMBERS.include?(char)
  end
  palindrome?(array)
end

# better_answer =>
def real_palindrome?(string)
  string = string.downcase.delete('^a-z0-9')
  palindrome?(string)
end

p real_palindrome?('madam') == true
p real_palindrome?('Madam') == true           # (case does not matter)
p real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
p real_palindrome?('356653') == true
p real_palindrome?('356a653') == true
p real_palindrome?('123ab321') == false
# problem finish: 7m 37s

# => The `real_palindrome` method is defined on `lines 643 - 648` and has one parameter `string`. The variable `array` is initialized on the first line of the of the method and assigned to the return value of several methods chained together. The method `downcase` is called on the object `string` references and will return a new string with all lowercase characters. Then the `chars` method is called on the new string which returns an array of single character substrings from the original string. This array obejct has the `select` method called on it and takes a `do..end` block as a argument. The block has a parameter `char` that represents the current element of the iteration. Within the block several constants have the `include?` method called on the objects they reference. The `include?` method is passed in the object `char` references as an argument. This checks if the current element within the array is included in either of the constants. If it is the block will return true and the character will be added to the array that is returned from the select method. The new array that is returned from the `select` method is the object that the `array` variable references in the end. The last line of the method calls the `palindrome?` method and the object `array` references is passed in as an argument. This will determine if the array object is equal to the reverse version of itself and will return a boolean value.
# explaination finish: 7m 49s

# ---------

def palindromic_number?(n)
  n.to_s == n.to_s.reverse
end

p palindromic_number?(34543) == true
p palindromic_number?(123210) == false
p palindromic_number?(22) == true
p palindromic_number?(5) == true
# problem finish: 1m 33s

# further_exploration =>
# When leading zeros are included Ruby will read it as an octal number. The zeros end up being removed and the digits within the integer change. I could not find a way to make it work.

# => On `line 670` the object the variable/argument `n` points to has the `to_s` method called on it. This will return a string. The `==` method is called on this string value and passed an additional argument. The object the argument `n` points to has `to_s` called on it which returns a string, and then has the `reverse` method called on that which will return new string. If the two string objects are equal then the expression will return true, otherwise the expression will return false.
# explaination finish: 2m 24s

# --- Easy 4 ---

def short_long_short(string_1, string_2)
  if string_1.length > string_2.length
    long, short = string_1, string_2
  else
    long, short = string_2, string_1
  end
  short + long + short
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"
# problem finish: 6m 22s

# => The conditional on line 1 evaluates the expression `string_1.length > string_2.length`. Both arguments have the `length` method invoked on the object they reference. This method will return an integer value. If the object `string_1` references is greater than `string_2` than using parallel assignment the `long` variable is initialized and assigned to `string_1` and the `short` variable is initialzied and assigned to `string_2`. Otherwise the `long` variable is initialized and assigned to `string_2` and the `short` variable will be assigned to `string_1`. The last line of the method concatenates the objects the variables `long` and `short` reference and return a new string object.
# explaination finish 4m 5s

# ---------

def century(year)
  cent, last_digits = year.divmod(100)
  cent += 1 if last_digits >= 1
  if [11, 12, 13].include?(cent % 100)
    suffix = 'th' 
  else
    suffix = case cent % 10
             when 1 then 'st'
             when 2 then 'nd'
             when 3 then 'rd'
             else 'th'
             end
  end
  cent.to_s + suffix
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'
# problem finish: +10m 

# => Variables `cent` and `last_digits` are initialized on line one of the method. The variaible `cent` is assigned to the object variable `year` references divided by `100`. The variable `last_digit is assigned to the object variable `year` references modulus `100`. This is possible because the method `divmod` called on `year` returns two integer values, so parallel assignment can be used. Next an expression evaulates if the `last_digits` variable is greater than or equal to the value of `1`. If it is greater/equal than the object variable `century` references will be incremented by `1` using variaible reassignment `+=`. Another `if` statement is given and has the expression `[11, 12, 13].include?(cent % 100)`. The array object `[11, 12, 13]` has the `include?` method invoked upon it and the method is passed the argument `cent % 100`. The method determines if the argument is present within the given array object. If it is the method will return true, if not the method will return false. If true a variable `suffix` is initialized and assigned the the string object 'th'. If the expression is not true then the initialized `suffix` variable is assigned to the return value of a case statement. The object being evaluated is `cent % 10` which returns the last digit of the integer. Depending on what that value is will determine which string object is returned from the case statement. After suffix has been assigned, the last line of the method has `cent` having `to_s` invoked which returns a string and the suffix value being concatenated. The overall method return is a string object detmerining the centruy based on the year argument given.
# explaination finish: 8m 51s

# ---------

def leap_year?(year)
  if year % 4 == 0
    return true unless year % 100 == 0 && year % 400 != 0
  end
  false
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true
# problem finish:  7m 17s

# fruther_exploration =>
# The values that are divisble by 400 and 100 will not be accounted for if the conditions are switched around in the way they are given. Rewriting it in the reverse order of the original answer seems a bit more complex, but that was how I has my answer before.

# => A conditional statement is given on `line 1` of the method. The expression evaluates modulus 4 of the object `year` references and compares it to the value `0`. If this is true then the following expression is also evaluated: `year % 100 == 0 && year % 400 != 0`. This evaluated `year` modulus 100 and compared it to 0. It also evaluates `year` modulus 400` and determines if it is not equal to zero. If both of these values are true then true is returned from the method. Otherwise the method will return the last line which is false.
# explaination finish: 2m 54s

# ---------

def leap_year?(year)
  if year % 4 == 0
    return true if year < 1752
    return true unless year % 100 == 0 && year % 400 != 0
  end
  false
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == true
p leap_year?(1) == false
p leap_year?(100) == true
p leap_year?(400) == true
# problem finish: 6m 15s

# => The conditional statement was added on `line 771`. If the expression `year <= 1751` evaluates to true then the method returns true. Otherwise execute the next line of code.
# explaination finish: n/a

# ---------

def multisum(num)
  (1..num).to_a.select do |n|
    n % 3 == 0 || n % 5 == 0
  end.sum
end

p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168 
# problem finish: 2m 34s

# further_exploration =>
# (1..num).to_a.inject(0) do |sum, n|
#   if n % 3 == 0 || n % 5 == 0
#     sum += n
#   end
#   sum
# end

# => The method `mulitsum` is defined on `lines 796 - 800` and has one parameter. On the next line a range object is intialized for values 1 up to the given argument. The `to_a` method is called on the range which will return an array of integers. Next the `select` method will iterate over the array object. `Select` is passed a `do..end` block as an argument. The block itself contains a paramter `n` which represents each element as the method iterates over the array. Two expressions are given with a operator `||`. Both expressions are taking the value `n` references and taking the modulus. If the modulus is equal to zero than the block will return true, and the value `n` will be included in the new array the `select` method returns. After the method returns a new array the `sum` method is called which will sum all the integers within the array and return an integer value. This is returned from the method.
# explaination finish: 5m 50s

# ---------

# Write a method that takes an Array of numbers, and returns an Array with the same number of elements, and each element has the running total from the original Array.

def running_total(array)
  sum = 0
  array.map do |num|
    sum += num
  end
end

p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []
# problem finish: 2m 16s

# furhter_exploration =>
# sum = 0
# array.each_with_object([]) do |num, arr|
#   arr << (sum += num)
# end

# => The variable `sum` is initialized and assigned to the value of `0`. The object `array` references has the `map` method called on it. The `map` method is passed a `do..end` block as an argument. The block has a parameter `num` which represents each element as the method iterates over the array. Inside the block the variable `sum` is reassigned to `sum + num`. The `map` method returns a new array object with each value the block returned on each iteration.
# explaination finish: 3m 43s

# ---------

# DID NOT COMPLETE; CORRECT ANSWER
DIGITS = {
  '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
  '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9
}

def string_to_integer(string)
  digits = string.chars.map { |char| DIGITS[char] }

  value = 0
  digits.each { |digit| value = 10 * value + digit }
  value
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

# further_exploration =>
# Write a hexadecimal_to_integer method that converts a string representing a hexadecimal number to its integer value.
# SKIP

# => The `DIGITS` constant is initialized and assigned to a hash object composed of string objects as keys and integers as values. The method is defined on `lines 853 - 859` and has one parameter `string`. The `digits variable is initialized on `line 854` and assigned to the return value of several chained mathods. The object the variable `string` represents has the `chars` method invoked on it, which returns an array of single character substrings. This new array then has the `map` method called on it. The `map` method takes a block as an argument `{}`, and the block has it's own parameter `char`. The parameter `char` represents each element as the `map` method iterates though the array. Within the block values of the `DIGITS` constant are being accessed using the `[]` method and having `char` passed as an argument. This will return the integer values from the `DIGITS` hash and the `map` method will return these values in an array. On `line 856` the variable `value` is initialized and assigned to the value 0. The array object `digits` references has the `each` method called upon it and is passed a block as an argument. The block has a parameter `digit` which represents each element as the `each` method iterates through the `digits` array. Within the block `value` is reassgined to `10` multiplied by itself `value` plus the `digit` or current element of the iteration. Once all elements of the array have been iterated through the variable `value` is returned from the method.

# ---------

DIGITS = {
  '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
  '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9
}

def string_to_integer(string)
  digits = string.chars.map { |char| DIGITS[char] }

  value = 0
  digits.each { |digit| value = 10 * value + digit }
  value
end

def string_to_signed_integer(string)
  if string[0] == '-'
    number = string.delete('-')
    0 - string_to_integer(number)
  elsif string[0] == '+'
    number = string.delete('+')
    string_to_integer(number)
  else
    string_to_integer(string)
  end
end

p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100
# problem finish: 9m 33s

# further_exploration =>
# def string_to_signed_integer(string)
#   case string[0]
#   when '-' then -string_to_integer(string[1..-1])
#   when '+' then string_to_integer(string[1..-1])
#   else          string_to_integer(string)
#   end
# end

# refactored...
# def string_to_signed_integer(string)
#   integer = string_to_integer(string.delete('+-'))
#   case string[0]
#   when '-' then -integer
#   else integer
#   end
# end

# => The conditional statement evaluates the following expression `string[0] == '-'` which calls the `[]` method on the object the `string` variable references. The `[]` method is passed the value 0 as an argument. This returns the value at index 0 of the object `string` references. The `==` operator compares this value to the other value provided `-`. If they are the same then the variable `number` will be intialized and assigned to the return value of `delete` called on the object `string` references. The method `delete` is passed `-` as an argument which means it will delete this string character from the caller, and return a new string. The expression below it takes the value 0 and subtracts the return value of the method call `string_to_integer` with the argument `number` passed in. This will return the number in integer form. This returns a negative integer. The rest of the conditional is similar but slightly modified depending on whether the `string` object has a '+' or no sign at all.
# explaination finish: 6m 29s

# ---------

DIGITS = {
  '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
  '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9
}

def integer_to_string(num)
  string = ''
  loop do
    num, digit = num.divmod(10)
    string << DIGITS.key(digit)
    break if num == 0
  end
  string.reverse
end

p integer_to_string(4321) == '4321'
p integer_to_string(0) == '0'
p integer_to_string(5000) == '5000'
# problem finish: +10m

# => The `DIGITS` constant is initialized and assigned to the hash object. The method `integer_to_string` is defined on `lines 930 - 939`. On the first line of the method the variable `string` is initialized and assigned to the empty string object `''`. On the next line the `loop` method is called. The `do..end` block that follows defines a block since it occurs after the method invocation. On the next line there is parallel assignment to the return of the `divmod` method. The method returns an array with the return values of dividing the caller by the given argument and taking the modulus the caller with the given argument. The variable `num` is assigned to the return value of the divison, and the variable `digit` is assigned to the return value of modulus. On the next line the object `string` references has the `<<` method called on it and is passed `DIGITS.key(digit)` as an argument. The return value of the expression will be added to the object `string` references. The constant DIGITS has the `key` method calle don it and is passed `digit` as an argument. This will return the value of the key within the hash that has the value that is given as an argument. The next line is a break conditional which will terminate the loop if the value `num` references is equal to 0. The last line of the method returns the string value generated from the loop, after it has had the reverse method called on it.
# explaination finish: +10m

# ----------

# DID NOT COMPLETE; CORRECT ANSWER
# def signed_integer_to_string(number)
#   case number <=> 0
#   when -1 then "-#{integer_to_string(-number)}"
#   when +1 then "+#{integer_to_string(number)}"
#   else         integer_to_string(number)
#   end
# end

# p signed_integer_to_string(4321) == '+4321'
# p signed_integer_to_string(-123) == '-123'
# p signed_integer_to_string(0) == '0'

# further_exploration =>
def signed_integer_to_string(number)
  prefix = case number <=> 0
           when -1 then "-"
           when +1 then "+"
           else         ""
           end
  prefix + integer_to_string(number)
end

# => A case statement is used and is evaluating the expression of the argument `number` being less, equal, or greater to the value 0, using the spaceship operator. When the expression evaluates to -1 then a string will be returned including a '-' sign and a method call to the `integer_to_string` method. The argument passed to the method also includes a negative symbol so the integer is passed in as a negative value. If the case expression returns +1 then a string is returned that includes the method call and a '+' symbol. Lastly if 0 is returned than the method will be called and the value returned. The method will return whichever expression within the case statment is executed. 

# --- Easy 5 ---

def ascii_value(string)
  sum = 0
  string.chars.each do |char|
    sum += char.ord
  end
  sum
end
    
p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0
# problem finish: 1m 50s

# further_exploration =>
# char.ord.chr == char

# => The variaible `sum` is initialzied and assigned to the value 0. On the next line the object `string` references has the `chars` method called on it, which returns an array of substrings. The array has the `each` method called on it and is followed by a `do..end` which defines a block. The block has on parameter `char` that represents each element as the method iterates through the array. Within the block the variable `sum` is reassigned to `sum` plus the return value of the object `char` references having the `ord` method called on it. This `ord` method returns an integer equivlanet to the ASCII value of the character. The `each` method will iterate over each character and total the ASCII values that make up the string object. The last line of the method contains the variable `sum` which means the object it references will be returned. An integer value is returned. 
# explaination finish: 4m 48s

# ---------

def time_of_day(number)
  hours, minutes = number.divmod(60)
  hours %= 24 if hours > 24 || hours < -24
  if hours < 0
    hours = 24 + hours
  end
  time = format("%02d:%02d", hours, minutes)
end
  
p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"
# problem finish: +10m

# further_exploration =>
# 1. hours % 24
# 2. Not sure how to use Date/Time methods
# 3. Determine the day of the week using a counter for each time you divide by 24.

# => The variables `hours` and `minutes` are assigned to the elements of the returned array from the `divmod` method. The `divmod` method is called on the object the `imte_of_day` method argument `numbers` references and passed `60` as an argument to the `divmod` method. This returns as array object and `hours` is assigned to the first element and `minutes` is assigned to the second element of the array. The expression hours > 24 || hours < -24 is evelauted and if either of the expressions are true then `hours % 24` will be evaluated and reassigned to the `hours` variable. Another conditional is given with the expression `hours < 0` and if true the `hours` variable will be reassigned to `24 + `hours`. The last line of the method calls the `format` method and is passed several arguments. A string and two variables. The return value of this method is a string.
# explaination finish: 5m 17s

# ---------

MINUTES_PER_HOUR = 60

def after_midnight(string)
  hour_to_minutes = string[0,2].to_i * MINUTES_PER_HOUR
  minutes = string[3,2].to_i
  total = hour_to_minutes + minutes
  total == 1440 ? 0 : total
end

def before_midnight(string)
  total = after_midnight(string)
  return 0 if total == 0
  total = 1440 - total
end

p after_midnight('00:00') == 0
p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0
# problem finish: +10m

# further_exploration =>
# unsure how to use date and time to solve problem

# => The variable `hours_to_minutes` is initialized and assigned to the return value of an expression. The expression calls the `[]` method (`slice` method) on the object `string` references and returns the substring or two characters beginngin at the 0 index. The `to_i` method is called on this substring which will return an integer. The integer is then multiplied by the value the constant MINUTES_PET_HOUR references. Similarly the `minutes` method is initialized and assigned to the return value of the `[]` method and the `to_i` method. The variable `total` is initialized and assigned to the return value of the expression `hour_to_minutes + minutes`. Lastly a ternary expression is given with the expression `total == 1440` and if true will return 0 and if false will returrn the value the variable `total` points to.
# The variable `total` is initialized in the `before_midnight` method and assigned to the return value of the `after_midnight` method. If the value `total` points to is equal to 0 then the method should return zero, otherwise the method should return the value of the expression `1440 - total`.
# explaination finish: 8m 14s

# ---------

def swap(string)
  string.split.map do |word|
    word[0], word[-1] = word[-1], word[0]
    word
  end.join(' ')
end

p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'
# problem finish: 6m 31s

# further_exploration =>
# passing only the letters to be swapped would only return those letters and not the entire word, also this way only using regular assignment and not indexed assignment so the caller isn't mutated.

# => The object the variable `string` references has the method `split` called on it which will return an array of substrings. This array has the `map` method called on it and is passed a `do..end` block. The block has a parameter `word` that represents every element as the method iterates through the array. Within the block parallel assignment is used to reaassign the elements at index 0 and -1 with eachother. Thus swapping the first and last character of the word. The object `word` points to is returned from the block and the map method returns a new array of the transformed words. Lastly the `join` method is called on the array and the elements are joined together by whitespace.
# explaination finish: 4m 29s

# ---------

cleanup("---what's my +*& line?") == ' what s my line '

***Done but deleted code accidentally***

# ----------

# PEDAC
# input = string that includes spaces
# output = hash where the keys are number of characters within a word, and the value is the number of words within the sentence of that length

# problems =
# - obtaining length of words within sentence
# - create key value pairs and add them to the hash
# - count how many words of the same length exist within the sentence
# - split the string into an array

# implicit/explicit reqs
# - word is any string of characters that doesn't include a space
# - puncuation is included in the letter count
# - empty string will return an empty array

# mental model 
# >> examine each word individually
# >> obtain the length of the word
# >> if the word length already exists within the hash increment the value
# >> else create a new key value pair and initialize the value to 1
# >> return the hash

# algorithm 
# define the method to take one parameter
# initialize an empty hash
# turn the string into an array object
# iterate over the array object
# count the current word
# if the word length is present within the hash, increment that value
# if the word length is not present, then create a new key-value pair 
# return the hash

def word_sizes(string)
  length_of_words_hash = {}
  
  string.split(' ').each do |word|
    word_length = word.length
    
    if length_of_words_hash.key?(word_length)
      length_of_words_hash[word_length] += 1
    else
      length_of_words_hash[word_length] = 1
    end
  end
  
  length_of_words_hash
end

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
p word_sizes('') == {}

# ----------

ALPHABET = ('A'..'Z').to_a + ('a'..'z').to_a

def word_sizes(string)
  length_of_words_hash = {}
  
  clean_string = string.chars.select do |char|
                   ALPHABET.include?(char) || char == ' '
                 end.join
  
  clean_string.split(' ').each do |word|
    word_length = word.length
    
    if length_of_words_hash.key?(word_length)
      length_of_words_hash[word_length] += 1
    else
      length_of_words_hash[word_length] = 1
    end
  end
  
  length_of_words_hash
end

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
p word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
p word_sizes('') == {}

# ----------

# zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

# Problem
# input = array
# output = array in different order

# Problem Domain =
# - storing the english words that represent each number
# - a way to sort integers and/or strings
# - convert between the two
# - only worried about numbers 0 through 19

# mental model
# >> CONSTANT to store a hash with numbers and english equivalent
# >> iterate through the array
# >> transform the integers into english
# >> sort the array
# >> transform the english back into integers

NUMBERS_TO_STRING = {
  0 => 'zero', 1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four',
  5 => 'five', 6 => 'six', 7 => 'seven', 8 => 'eight', 9 => 'nine',
  10 => 'ten', 11 => 'eleven', 12 => 'twelve', 13 => 'thirteen',
  14 => 'fourteen', 15 => 'fifteen', 16 => 'sixteen', 17 => 'seventeen',
  18 => 'eighteen', 19 => 'nineteen'
}
  

def alphabetic_number_sort(array)
  english_numbers = array.map { |num| NUMBERS_TO_STRING[num] }.sort
  english_numbers.map { |word| NUMBERS_TO_STRING.key(word) }
end
  

p alphabetic_number_sort((0..19).to_a) == [
  8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
  6, 16, 10, 13, 3, 12, 2, 0
]

# ----------

# Problem
# input = string
# output = string with all consecutive duplicate characters removed

# - identifying the duplicate consecutive characters
# - removing characters from string
# - cannot use #squeeze method
# - no words given are spelled with consective characters  


# mental model
# - initialize a new string variable to an empty string
# - split string into an array of characters
# - iterate over the array
# - add the character to the new string if it is not the same as the previous character otherwise skip
# return the new string

def crunch(string)
  result = ''
  
  string.chars.each do |char|
    result << char unless result[-1] == char
  end
  
  result
end

p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''

# ----------

# Problem 
# input = a string
# output = strings that form a box with a sentence inside

# problem domain
# - printing the string provided
# - printing the box
# - adjusting the length of the box to fit the string
# - printing an empty box if an empty string is provided

# mental model
# >> print top of box
#  > number of dashes is determined by the string length 
#  > extra spaces on the sides to center the string
# >> print box sides of box
#  > length of spaces determined by string length
# >> print bottom of box (same as top)

def print_in_box(string)
  length = string.length + 2
  
  puts "+" + ("-" * length) + "+"
  puts "|" + (" " * length) + "|"
  puts "| #{string} |"
  puts "|" + (" " * length) + "|"
  puts "+" + ("-" * length) + "+"
  
end


print_in_box('To boldly go where no one has gone before.')
print_in_box('')

# ----------

def spin_me(str)
  str.split.each do |word|
    word.reverse!
  end.join(" ")
end

spin_me("hello world") # "olleh dlrow"

# Correct Answer => The method will return a different object.

# --- Easy 6 ---

DEGREE = "\xC2\xB0"

# Problem
# input = integer
# output = string representing degrees, minutes, seconds

# problem domain =
# - converting integer into degrees, minutes, seconds
# - division, modulus
# - format string
# - use correct puncuation
# - return string

# mental model
# >> obtain the whole number on left side of decimal
# >> divmod(1) to get whole number and decimal number
# >> use constants to convert decimal to minutes by multiplying
# >> take decimal of multiplication and multiply by 60 to get second
# >> use format to return the string

DEGREES_TO_MINUTES = 60
MINUTES_TO_SECONDS = 60

def dms(num)
  degrees, minutes = num.divmod(1)
  minutes *= DEGREES_TO_MINUTES
  seconds = (minutes % 1) * MINUTES_TO_SECONDS
  
 format("%d#{DEGREE}%02d'%02d\"", degrees, minutes, seconds)
end


puts dms(30) #== %(30°00'00")
puts dms(76.73)# == %(76°43'48")
puts dms(254.6) #== %(254°36'00")
puts dms(93.034773) #== %(93°02'05")
puts dms(0) #== %(0°00'00")
puts dms(360) #== %(360°00'00") || dms(360) == %(0°00'00")

# ----------

# Problem
# input = array of strings
# output = string with no vowels

# problem domain = 
# - identifying the vowels within the sentence
# - removing the vowel characters
# - returning modified string

# mental model
# >> create a constant consisting of vowels to delete
# >> iterate over the string
# >> iterate over characters within string
# >> determine whether to return a character
# >> compare characters in downcase form
# >> do not return character if it is a vowel
# >> return a new array
# >> rejoin the words/string
# >> return string

VOWELS = %w(a e i o u)

def remove_vowels(array)
  array.map do |word|
    word.chars.select do |char|
      VOWELS.include?(char.downcase) ? false : true
    end.join
  end
end

p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# ----------

# Problem 
# input = integer represents number of digits
# output = index of fibonacci number that has the specified number of digits

# problem domain =
# - creating a counter to keep track of index
# - calculating a fibonacci number
# - identifying how many digits are in each fibonacci number
# - returning the index if the number of digits is equal to the argument
# - using a loop

# mental model
# >> create a counter
# >> create a loop
# >> create a method to calculate the fibonacci number
# >> compare each fibonacci number to the argument
# >> repeat calculation if the number turned into a string legnth is not equal
# >> increment counter
# >> otherwise return the counter value

def find_fibonacci_index_by_length(number)
  index = 2
  num1 = 1
  num2 = 1
  
  until num2.to_s.length == number
    num3 = num1 + num2
    num1 = num2
    num2 = num3
    index += 1
  end
  index
end
  
p find_fibonacci_index_by_length(2) == 7     # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12    # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847

# ----------

# Problem
# input = array
# output = array with elements in reverse order

# problem domain 
# - mutate array object so it is the same object returned
# - cannot use Array#reverse methods
# - remove an element from the front of the array
# - add it back to the back of the array 
# - repeat for all elements
# - element assignment
# - referencing indecies

# mental model
# >> add counter
# >> iterate over the array
# >> shift each element
# >> add to back of the array
# >> repeat until legnth of array reached
# 

def reverse!(array)
  counter = 0
  array_size = array.length - 1
  
  until counter > array_size
    first_elem = array.shift
    array.insert(-counter, first_elem)
    counter += 1
  end
  
  array
end


list = [1,2,3,4]
p result = reverse!(list)
p result == [4, 3, 2, 1] # true
p list == [4, 3, 2, 1] # true
p list.object_id == result.object_id # true

list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

list = []
p reverse!(list) == [] # true
p list == [] # true

# *********************************
# *****UNDERSTANDING SOLUTION******
# *********************************
def reverse!(array)
  left_index = 0
  right_index = -1

  while left_index < array.size / 2
    array[left_index], array[right_index] = array[right_index], array[left_index]
    left_index += 1
    right_index -= 1
  end

  array
end

# explaination =>
# The `reverse!` method is defined and has one parameter `array`. On the first line of the method the variable `left_index` is initialized and assigned the value of 0. On the next line, the variable `right_index` is initialized and assigned to the value of -1 (the last element of a given array object). Next a while loop is created with the condition of `left_index` < `array.size / 2`. This means as long as the variable `left_index` is less than the return value of `array.size / 2` then the loop will continue to execute.

# Once `left_index` is greater than half the array size the loop will stop. Within the while loop parallel assignment is used. `array[left_index]` is assigned to the value of `array[right_index]`(array[0] = array[-1]; the first element of the array is assigned to the value of the last element of the array) and array[right_index] is assigned to the value of array[left_index] (array[-1] = array[0]; the last element of the array is assigned to the value of the first element of the array). Lastly the `left_index` and `right_index` variables are incremented. The array is returned as the last line of the method.

# ----------
# **********
# DIFFICULT PROBLEM NEEDS REVIEW
# **********
# Problem
# input = array
# output = new array in reverse order

# problem domain
# - cannot modify original array
# - must return a new array object
# - iterate through given array object
# - populate new array with elements from original array
# - reverse order of original array

# mental model
# >> initialize new array object
# >> iterate over original array with index
# >> add first elements to end of array
# >> add next element before other element
# >> keep adding elements before eachother until complete
# >> new array should now be rotated


# CORRECT ANSWER =>
def reverse(array)
  result_array = []
  array.reverse_each { |element| result_array << element }
  result_array
end

# *********************************
# *****UNDERSTANDING SOLUTION******
# *********************************
The `reverse` method is defined and takes one parameter `array`. On the first line of the method the `result_array` variable is initialized and assigned to an empty array object. Next the `reverse_each` method is called on the `array` argument. This is exactly the same as `each` but it iterates backwards. The `reverse_each` takes a block as an argument, and the block has the parameter `element` which represents the elements of the `array` object. The objects the variable `element` represent are added to the `results_array`. Because this method starts at the end, the elements would be added starting from the end of the array, reversing the order in the process. The last line of the method returns the `results_array`


p reverse([1,2,3,4]) #== [4,3,2,1]          # => true
p reverse(%w(a b e d c)) #== %w(c d e b a)  # => true
p reverse(['abc']) == ['abc']              # => true
p reverse([]) == []                        # => true

p list = [1, 3, 2]                      # => [1, 3, 2]
p new_list = reverse(list)              # => [2, 3, 1]
p list.object_id != new_list.object_id  # => true
p list == [1, 3, 2]                     # => true
p new_list == [2, 3, 1]                 # => true

# original answer from first time doing the problem:
def reverse(list)
  new_list = []
  counter = list.size - 1
  loop do
    break if counter < 0
    new_list << list[counter]
    counter -= 1
  end
  new_list
end

# ----------

def merge(array1, array2)
  (array1 + array2).uniq
end

p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

# ----------

# Problem
# input = array
# output = nested array

# problem domain =
# - find the halfway point of the array
# - split array in half if even size
# - split array into larger and smaller half if size is odd
# - add the arrays into another array to create a nested array
# - return the nested array

# mental model
# >> initialize a results array
# >> obtain the size of the array
# >> determine if the size is odd or even
# >> separate the array at the determined index
# >> add the split arrays into the results array
# >> return the results array as a nested array

def halvsies(array)
  result = []
  length = array.size
  
  
  halfway_index = (length - 1)/ 2

  
  result << array[0..halfway_index]
  result << array[(halfway_index + 1)..-1]
  
  result
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]

# ----------

# Problem
# input = array with duplicate
# output = integer that appears twice in array

# problem domain = 
# - iterating through the array
# - determining which number appears twice
# - counting instances of the number in the array
# - returning the value of the number that appears more than once.

# mental model
# >> iterate over the array
# >> pass each value into the count method
# >> return the value for the element that counts 2 times

def find_dup(array)
  duplicate = ''
  
  array.each do |elem|
    duplicate = elem if array.count(elem) == 2
  end
  duplicate
end

p find_dup([1, 5, 3, 1]) == 1
p find_dup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7,  34, 57, 74, 45, 11, 88, 67,  5, 58]) == 73

# ----------

# Problem
# input = array, integer
# output = boolean

# problem domain = 
# - cannot use include? method
# - determine is an element is present within an array
# - examine each element within the array
# - compare the given argument to the elements within the array
# - if the elemnt matches than return true if not return false

def include?(array, value)
  present = false
  
  array.each do |elem|
    present = true if elem == value
  end
  present
end


p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false

# ----------

# Problem
# input = integer
# output = strings that form a right triangle

# problem domain =
# - making the length and width of the triange equal to n
# - making the diagnoal from left to upper right
# - using a loop or iterator or times method

# mental model
# >> put the number of spaces needed and number of stars needed on each line
# >> print the next line after decrementing the spaces and incrementing the stars
# >> repeat until stars equals the number argument

def triangle(number)
  width = 1
  spaces = number - 1
  number.times do |num|
    puts (" " * spaces) + ("*" * width)
    width += 1
    spaces -= 1
  end
end

triangle(5)
triangle(9)

# --- Easy 7 ---

# Problem
# input = array1, array2
# output = combined array

# problem domain =
# - combining the arrays
# - taking from one array and then the other to combine them
# - returning the combined array

# mental model
# >> initialize a results array
# >> create a loop
# >> add from one array
# >> add from other array
# >> increment index
# >> continue until array size is equal to combine size of array

def interleave(array1, array2)
  index = 0
  result = []
  
  loop do
    result << array1[index]
    result << array2[index]
    index += 1
    break if result.size == (array1.size + array2.size)
  end
  
  result
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# ----------

# Problem
# input = string
# output = hash

# problem domain =
# - counting characters based on case
# - identifying the characters case or neither
# - incrementing the hash values
# - iterating through the string

# mental model
# >> define the alphabet constants
# >> split string into an array of characters
# >> if the char matches the lowercase alphabet increment that value
# >> if it matches the upper case alphabet increment that value
# >> otherwise increment the neither value
# >> return the hash

UPPERCASE_ALPHABET = ('A'..'Z').to_a
LOWERCASE_ALPHABET = ('a'..'z').to_a


def letter_case_count(string)
  result = { lowercase: 0, uppercase: 0, neither: 0}
  
  string.chars.each do |char|
    case
    when UPPERCASE_ALPHABET.include?(char) then result[:uppercase] += 1
    when LOWERCASE_ALPHABET.include?(char) then result[:lowercase] += 1
    else result[:neither] += 1
    end
  end
  result
end
    
p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# ----------

# Problem
# input = string
# output = string with all words capitalized if they start with letters

# problem domain =
# - identifying words within the string
# - capitalizing the first character of each word
# - iterating over the string words
# - joining the words back into a string

def word_cap(string)  
  string.split(' ').map do |word|
    word.capitalize!
    word
  end.join(' ')
end

p word_cap('four score and seven') == 'Four Score And Seven'
p word_cap('the javaScript language') == 'The Javascript Language'
p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# -------

# Problem 
# input = string
# output = string with cases of characters switched

# problem domain =
# - split up words within string
# - iterate over the words
# - ignore words that are not letters
# - identify uppercase characters and swap to lowercase
# - identify lowercase characters and swap to uppercase
# - iterate over each character within the word
# - rejoin the string back together

LOWERCASE = ('a'..'z').to_a
UPPERCASE = ('A'..'Z').to_a

def swapcase(string)
  string.split.map do |word|
    word.chars.map do |char|
      if LOWERCASE.include?(char)
        char.upcase
      elsif UPPERCASE.include?(char)
        char.downcase
      else
        char
      end
    end.join('')
  end.join(' ')
end
p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

# ----------

# Problem
# input = string
# output = string with characters staggered

# problem domain = 
# - captialize certain characters
# - other characters should be lowercased
# - count characters that are not letters
# - return a string

# mental model
# lowercase all characters
# iterate over each character, skipping odd indexes and uppercase those characters

def staggered_case(string)
  string = string.downcase
  
  string.chars.each_with_index do |char, ind|
    if ind.even? || ind == 0
      char.capitalize!
    else
      char
    end
  end.join('')
end

p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# -----------

ALPHABET = ('a'..'z').to_a

def staggered_case(string)
  result = ''
  need_upper = true
  string.downcase.chars.each do |char|

    if need_upper && ALPHABET.include?(char)
      result += char.upcase
      need_upper = !need_upper
    elsif ALPHABET.include?(char)
      result += char
      need_upper = !need_upper
    else
      result += char
    end
  end
  result
end

  

p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'

# ---------
def show_multiplicative_average(array)
  sum = array.map(&:to_f).inject(:*)
  
  average = sum / array.size
  format("%.3f", average)
end

p show_multiplicative_average([3, 5])                # => The result is 7.500
p show_multiplicative_average([6])                   # => The result is 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667

# ----------

def multiply_list(array1, array2)
  result = []
  
  array1.each_with_index do |_, ind|
    result << (array1[ind] * array2[ind])
  end
  result
end

p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

# further_exploration =>
def multiply_list(array1, array2)
  array1.zip(array2).map { |arr| arr.inject(:*) }
end

p multiply_list([3, 5, 7], [9, 10, 11])# == [27, 50, 77]

# ----------

# - multiply index 0 of first array by every element of the second array
# - multiply index 1 of the first array by every element of the second array
# - return results in new array

def multiply_all_pairs(array1, array2)
  result = []
  
  array1.each do |num1|
    array2.each do |num2|
      result << num1 * num2
    end
  end
  
  result.sort
end

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# ----------

def penultimate(string)
  array = string.split
  array[-2]
end

p penultimate('last word') == 'last'
p penultimate('Launch School is great!') == 'is'

# --- Easy 8 ---

# Problem 
# input = array
# output = integer representing sum

# problem domain =
# - obtaining sum
# - getting subsequences from the array
# - summing the subsequence
# - adding the sums of the subsequences together
# - get first element
# - get first and second element
# - get first second and third element...

# mental model
# >> use an #upto method to take the increaseing range of elements and add them to an initialized sum variable
# >> repeat for array size and then end


def sum_of_sums(array)
  sum = 0
  
  array.length.times do |num|
    sum += array[0..num].sum
  end
  
  sum
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35

# ----------

# Problem
# input = user input
# output = string

# problem domain =
# - ask user input
# - store user inpit
# - return a string with user input included

def madlibs
  print "Enter a noun: "
  noun = gets.chomp
  
  print "Enter a verb: "
  verb = gets.chomp
  
  print "Enter a adjecive: "
  adj = gets.chomp
  
  print "Enter a adverb: "
  adv = gets.chomp
  
  puts "Do you #{verb} your #{adj} #{noun} #{adv}? That's hilarious!"
end

madlibs

# ----------

# Problem
# input = string
# output = array of substrings

# problem domain = 
# - return string at index 1
# - return string at index 1 & 2
# - keep incrementing and returning substring

# mental model 
# >> set a counter
# >> set results array
# >> loop over the stirng
# >> increase the range of the substring to be returned
# >> add each value to the results array

def leading_substrings(string)
  index = 0
  result =[]
  
  loop do
    result << string[0..index]
    break if index == string.size - 1
    index += 1
  end
  result
end


p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

# ----------

def leading_substrings(string)
  index = 0
  result =[]
  
  loop do
    result << string[0..index]
    break if index == string.size - 1
    index += 1
  end
  
  result
end

def substrings(string)
  index = 0
  result = []
  
  while index < string.size
    substring = string[index..-1]
    result << leading_substrings(substring)
    index += 1
  end
  
  result.flatten
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]

# ----------

# Problem
# input = string
# output = array of substrings that are palindromes

# problem domain =
# - obtaining substrings
# - determining whether the substring is a palindrome
# - adding the substring to the results array
# - consider case of character when determining if palindrome
# - substring must be the same forward and backward
# - do not include single characters as palindromes

def leading_substrings(string)
  index = 0
  result =[]
  loop do
    result << string[0..index]
    break if index == string.size - 1
    index += 1
  end
  
  result
end

def substrings(string)
  index = 0
  result = []
  while index < string.size
    substring = string[index..-1]
    result << leading_substrings(substring)
    index += 1
  end
  
  result.flatten
end

def palindromes(string)
  substrings(string).select do |substring|
    
    substring == substring.reverse && substring.size > 1
  end
end

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]

# ----------

def fizzbuzz(start_num,end_num)
  start_num.upto(end_num) do |number|
    case
    when number % 3 == 0 && number % 5 == 0 then print "FizzBuzz"
    when number % 3 == 0 then print "Fizz"
    when number % 5 == 0 then print "Buzz"
    else                      print number
    end
    print ", " unless number == end_num
  end
    
end

fizzbuzz(1, 15)

# ----------

def repeater(string)
  string.chars.map do |char|
    char * 2
  end.join
end

p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''

# ----------

ALPHABET = ('A'..'Z').to_a + ('a'..'z').to_a
VOWELS = %w(A E I O U a e i o u)


def double_consonants(string)
  string.chars.map do |char|
    if ALPHABET.include?(char)
      if VOWELS.include?(char)
        char
      else
        char * 2
      end
    else
      char
    end
  end.join('')
end

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""

# ----------

def reversed_number(integer)
  integer.to_s.reverse.to_i
end

p reversed_number(12345) == 54321
p reversed_number(12213) == 31221
p reversed_number(456) == 654
p reversed_number(12000) == 21 # No leading zeros in return value!
p reversed_number(12003) == 30021
p reversed_number(1) == 1

# ----------

def center_of(string)
  half = string.size / 2
  half -= 1 if string.size.even?

  return string[half, 2] if string.size.even?
  string[half]
end
LS answer =>
def center_of(string)
  center_index = string.size / 2
  if string.size.odd?
    string[center_index]
  else
    string[center_index - 1, 2]
  end
end

p center_of('I love ruby') #= 'e'
p center_of('Launch School') == ' '
p center_of('Launch') #== 'un'
p center_of('Launchschool')# == 'hs'
p center_of('x') == 'x'

# --- Easy 9 ---

def greetings(array, hash)
  name = array.join(' ')
  job = "#{hash[:title]} #{hash[:occupation]}"
  "Hello, #{name}! Nice to to have #{job} around."
end

p greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
# => Hello, John Q Doe! Nice to have a Master Plumber around.

# ----------

# problem domain =
# - check if number has even number of digits
# - check if number  is the same on the left and right sides


def twice(number)
  array_number = number.to_s.chars
  number_size = array_number.length
  
  
  if number_size.odd?
    number *= 2
  else
    middle = number_size / 2 - 1
    if array_number[0..middle] == array_number[(middle + 1)..-1]
      number
    else
      number *= 2
    end
  end
  number
end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10

# ----------

def negative(num)
  if num > 0
    -num
  else
    num
  end
end

p negative(5) == -5
p negative(-3) == -3
p negative(0) == 0

# ----------

def sequence(num)
  result = []
  1.upto(num) { |n| result << n }
  result
end

LS answer =>
def sequence(number)
  (1..number).to_a
end

p sequence(5) == [1, 2, 3, 4, 5]
p sequence(3) == [1, 2, 3]
p sequence(1) == [1]

# ----------

# LOWERCASE = ('a'..'z').to_a

# def uppercase?(string)
#   string.chars.each do |char|
#     return false if LOWERCASE.include?(char)
#   end
#   true
# end

# LS answer =>
# def uppercase?(string)
#   string == string.upcase
# end

# p uppercase?('t') == false
# p uppercase?('T') == true
# p uppercase?('Four Score') == false
# p uppercase?('FOUR SCORE') == true
# p uppercase?('4SCORE!') == true
# p uppercase?('') == true

# ----------

def word_lengths(string)
  string.split.map do |word|
    "#{word} #{word.length}"
  end
end

p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

p word_lengths("baseball hot dogs and apple pie") ==
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

p word_lengths("Supercalifragilisticexpialidocious") ==
  ["Supercalifragilisticexpialidocious 34"]

p word_lengths("") == []

# ----------

def swap_name(name)
  first_name, last_name = name.split
  "#{last_name}, #{first_name}"
end
p swap_name('Joe Roberts') == 'Roberts, Joe'

# ----------

def sequence(number, start)
  result = []
  1.upto(number) do |num|
    result << start * num
  end
  result
end

p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []

# ----------

def get_grade(num1, num2, num3)
  avg = (num1 + num2 + num3) / 3
  
  case
  when 90 <= avg then "A"
  when 80 <= avg then "B"
  when 70 <= avg then "C"
  when 60 <= avg then "D"
  else                "F"
  end
end

LS answer =>
def get_grade(s1, s2, s3)
  result = (s1 + s2 + s3)/3

  case result
  when 90..100 then 'A'
  when 80..89  then 'B'
  when 70..79  then 'C'
  when 60..69  then 'D'
  else              'F'
  end
end

p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"

# ----------

def buy_fruit(array)
  result = []
  array.map do |fruit, qty|
    qty.times { |_| result << fruit }
  end
  result.flatten
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]

# ----------

# *****************
# difficult problem
# *****************

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

# problem domain
# - identify words that are anagrams of eachother
# - store words that are anagrams together
# - be able to access the storage to print
# - determine anagramas by comparing words and seeing if they contain the same characters
# - does not have to be a single method

# mental model
# iterate over the array with index
# determine if the characters in the current word match others in the array
# store them in a temporary aarray
# once all words have been compared return the array
# select only words that werent anagrams and repeat
# until all words have been analyzed

def anagrams(array)
  hash = {}
  
  array.each do |word|
    key = word.chars.sort.join.to_sym
    hash[key] = [word] unless hash.key?(key)
    
    array.each do |other_word|
      if word.chars.sort == other_word.chars.sort
        hash[key] << other_word unless hash.value?(other_word)
      end
    end
  end
  hash.each { |key, value| p value.uniq }
  
end

anagrams(words)

# LS answer =>
result = {}

words.each do |word|
  key = word.split('').sort.join
  if result.has_key?(key)
    result[key].push(word)
  else
    result[key] = [word]
  end
end

result.each_value do |v|
  puts "------"
  p v
end

# --- Medium 1 ---

# Problem
# input = array with different types of elements
# output = an array with the first element moved to the end

# problem domain =
# - do no modify the original array
# - return a new array from an iterator or make a copy to avoid mutating the original
# - take the first element and remove from the array
# - add that first element to the end of the array
# - return the modified array


# mental model
# >> iterate using map and return all elements
# >> iniitalize variable to hold return value
# >> remove first element and push to the end of the array

def rotate_array(original_array)
  array = original_array.map { |elem| elem }
  first_element = array.shift
  array << first_element
end

LS answer =>
def rotate_array(array)
  array[1..-1] + [array[0]]
end
***uses slice method***

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']

p x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
p x == [1, 2, 3, 4]                 # => true

# ----------

# You may use the rotate_array method from the previous exercise if you want. (Recommended!)

# You may assume that n is always a positive integer.

# Problem 
# input = two integers; one is the number, and one represents the last number of digits to rotate
# output = rotated integer

# problem domain =
# - method to rotate numbers
# - only rotating the number of digits requested
# - turning the integer into a string or array to manipulate


def rotate_array(original_array)
  array = original_array.map { |elem| elem }
  first_element = array.shift
  array << first_element
end

def rotate_rightmost_digits(number, digits)
  number_array = number.to_s.chars
  
  first_half = number_array[0...-digits]
  second_half = number_array[-digits..-1]
  
  second_half = rotate_array(second_half)
  (first_half + second_half).join.to_i
end

LS answer =>
def rotate_rightmost_digits(number, n)
  all_digits = number.to_s.chars
  all_digits[-n..-1] = rotate_array(all_digits[-n..-1])
  all_digits.join.to_i
end

p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917

# ----------

# Problem
# input = integer
# output = inetger (maximum rotation of integer)

# problem domain = 
# - use the previous methods
# - pass in arguments of gradually decreasing lengths
# - increment the number of digits that remain fixed in place
# - numbers at the beginning to be fixed in place
# - start with full number
# - proceed with number - minus first digit
# - proceed with number - minus two first digits
# - progressively iterating through the number and decreasing number of digits being sent into the argument
# - need a counter or to use the index
# - two inputs needs to pass into rightmost_digits method

# mental model
# - define the method to take an integer argument
# - don't need to modify type yet
# - need to obtain the size of the integer to determine digits argument in rotate_rightmost_digits method
# - times method to incremnt the range passed into the method
# keep reassigning the value returned and loop until the times method is complete

def max_rotation(int)
  number_of_digits = int.to_s.chars.size

  number_of_digits.downto(1) do |num|
    int = rotate_rightmost_digits(int, num)
  end
  int
  
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845

# ----------

# Problem
# input = number of lights
# output = an array representing which switches are on

# problem domain =
# - the number of lights also determines how many rounds there are as well
# - for each round the multiple of the switches are toggled
# - so round one: all switches
# - round two: 2, 4, 6...
# - round three: 3, 6, 9...
# - round four: 4, 8, 12...
# - need to be able to keep track of a set number of switches
# - need to be able to toggle switches on or off
# - needs to be able to reference switches 
# return an array with the switches left on at the end of the last round
# initially all switches are off
# first round they are all turned on
# either start with on or start with all off

# mental model
# >> initialize an array to store the switches and status of switches
# >> use boolean values
# >> need to create the given number of switches, and intialize all to off
# >> using the times method iterate over the hash and flip the necessary switch
# >> determine which switches to change based on current iteration's value (being a multiple of) 
# >> reassign the switch value
# >> repeat for next iteration
# >> once finished look at collection to determine which switches are left on at the end

def lights(n)
  switches = Array.new(n, false)
  n.times do |n|
    n += 1
    switches.each_with_index do |toggle, switch_number|
      if (switch_number + 1) % n == 0
        switches[switch_number] = !toggle
      else
        next
      end
    end
  end

  result = []
  switches.each_with_index do |switch, ind| 
    if switch == true
      result << ind + 1
    end
  end
  result
  
end

p lights(5)
p lights(10)

# ----------

# ***********
# Difficult problem
# ***********
# Problem
# input = integer (length and width of diamond)
# output = rows of strings that display a diamond shape

# problem domain =
# - regulate how many stars are printed
# - start at top of diamond
# - gradually increase the number of stars until n
# - gradually decrease the number of stars until 1
# - also need to print spaces to make the diamond shape

# mental model
# start with printing spaces
# should be less than hald the give n value
# print spaces then print stars
# decrease number of spaces
# increase number of stars
# repeat until middle is reached
# then decrease number of stars
# increase number of spaces
# until down to one



def diamond(n)
  number_of_stars = 1
  number_of_spaces = n / 2
  
while number_of_spaces >= 0
    print_stars = "*" * number_of_stars
    print_spaces = " " * number_of_spaces
    puts "#{print_spaces}#{print_stars}"
    number_of_stars += 2
    number_of_spaces -= 1
  end
  
  number_of_stars = n -= 2
  number_of_spaces = 1
  
   while number_of_stars >= 1 
    print_stars = "*" * number_of_stars
    print_spaces = " " * number_of_spaces
    puts "#{print_spaces}#{print_stars}"
    number_of_stars -= 2
    number_of_spaces += 1
  end
end
  
diamond(1)
diamond(3)
diamond(9)

# ******Explaination*********
# =>



# ----------

# problem domain
# - linking commands to correct operation
# - keeping track of a stack and register value
# - storing values in stack
# - sotring values in register
# - make stack an array
# - make the register a variable
# - use a case statement of if/else
# - break up string into commands
# - determine command or integer n being entered

def minilang(string)
  commands = string.split(' ')
  stack = []
  register = 0
  
  commands.each do |command|
    case command
    when 'PUSH'  then stack << register.to_i
    when 'ADD'   then register += stack.pop
    when 'SUB'   then register -= stack.pop
    when 'MULT'  then register *= stack.pop
    when 'DIV'   then register /= stack.pop
    when 'MOD'   then register %= stack.pop
    when 'POP'   then register = stack.pop
    when 'PRINT' then puts register
    else              register = command.to_i
    end
  end
  register
end    

# Examples:

minilang('PRINT')
# 0

minilang('5 PUSH 3 MULT PRINT')
# 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8

minilang('5 PUSH POP PRINT')
# 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# 12

minilang('-3 PUSH 5 SUB PRINT')
# 8

minilang('6 PUSH')
# (nothing printed; no PRINT commands)

# ----------

# Problem
# input = string 
# output = string with select words turned into string digits

# problem domain 
# - identify the words to be changed into digits
# - change the words into digits within the string
# - change words only do not alter rest of the sentence
# - deal with puncuation attached to words somehow
# - return to the modified string

# mental model 
# >> use a gsub method to replace the words with digit values
# >> iterate over the string and identify which words need to be replaced
# >> skip the words if no replacement is needed
# >> otherwise replace the word
# >> use an array to reference the index as the digit to be replaced
# >> or I can use a hash with the digits are a key or value


DIGITS = %w(zero one two three four five six seven eight nine)

def word_to_digit(string)
  string.split.map do |word|
    DIGITS.each_with_index do |number, ind|
      if word.include?(number)
        word = word.gsub(number, ind.to_s)
      else
        word
      end
    end
    word
  end.join(' ')
end

p word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'

# ----------

LS Answer =>
def fibonacci(nth)
  return 1 if nth <= 2
  fibonacci(nth - 1) + fibonacci(nth - 2)
end

# -----------

def fibonacci(nth)
  num1 = 1
  num2 = 1
  num3 = num1 + num2
  (nth - 3).times do |_|
    num1 = num2
    num2 = num3
    num3 = num1 + num2
  end
  num3
end

p fibonacci(20) == 6765
p fibonacci(100) == 354224848179261915075
p fibonacci(100_001) # => 4202692702.....8285979669707537501

LS answer=>
def fibonacci(nth)
  first, last = [1, 1]
  3.upto(nth) do
    first, last = [last, first + last]
  end

  last
end

# ----------

def fibonacci_last(nth)
  num1 = 1
  num2 = 1
  num3 = num1 + num2
  (nth - 3).times do |_|
    num1 = num2
    num2 = num3
    num3 = num1 + num2
  end
  num3.to_s[-1].to_i
end

p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
p fibonacci_last(123456789) # -> 4

# ----------

# Problem
# input = text file
# output = longest sentence, including the number of words

# problem domain =
# - split the text file/strings based on puncuation
# - count how many words each sentence has
# - if the number of words is greater than the longest sentence reassign the longest sentence
# - otherwise keep iterating over the sentences

text = File.read('gutenberg.txt')

longest_sentence = ''

array = text.split(/\.|\?|!/)
  array.each do |sentence|
    length = sentence.split(' ').size
    if length > longest_sentence.split(' ').size
      longest_sentence = sentence
    end
  end
puts "The longest sentence was #{longest_sentence} with #{longest_sentence.split(' ').size} words."

# ----------

# Problem
# input = string
# output = boolean

# problem domain =
# - keeping track of the blocks
# - keeping track of used and unused blocks
# - keeping track of the letters the word uses
# - iterating through the words
# - lower case does not matter
# - change case of work to match the given block case
# - return boolean

# mental model
# >> create blocks as a nested array
# >> initialize a used blocks variable to store blocks
# >> turn string into an array
# >> iterate over the string
# >> flatten used_blocks and check if char already is present
# >> if character is in the used blocks array return false
# >> otherwise continue
# >> iterate over blocks nested array
# >> if the char is present in the current block add that block to the used blocks array
# >> repeat until complete, shouldn't need an additional else staement because of used block check each iteration

def block_word?(string)
  blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C','P'],                   ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'],
            ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'],
            ['Z', 'M']]
  used_blocks = []
  
  string.chars.each do |char|
    return false if used_blocks.flatten.include?(char)
    
    blocks.each do |block|
      used_blocks << block if block.include?(char)
    end
  end
  true
  
end
  
p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true

** did not account for case in answer :(

# ----------

# Problem
# input = string
# output = hash containg percentages of letter case

# problem domain
# - spaces count as characters
# - counting total number of characters
# - counting total uppercase, lowercase, and neither 
# - calculating the percentage
# - storing the values in a hash
# - returning the hash

# mental model
# >> defining the method with a parameter
# >> initialize the hash with the given keys and set values to 0.0
# >> set constants for alphabet to use to count
# >> note we will be working with floats
# >> get total number of characters from string by using length
# >> iterate over the string as an array
# >> increment each variable for what the char classifies as
# >> set each variable to the return of counting each type of character within the string

def letter_percentages(string)
  hash = {lowercase: 0.0, uppercase: 0.0, neither: 0.0}
  total_characters = string.length.to_f
  
  string.chars.each do |char|
    case char
    when ('a'..'z') then hash[:lowercase] += 1
    when ('A'..'Z') then hash[:uppercase] += 1
    else                 hash[:neither] += 1
    end
  end
  
  hash.each { |k, v| hash[k] = (v / total_characters * 100.0) }
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }

# ----------

# Problem
# input = string containing or not containing parentheses
# output = boolean

# problem domain =
# - dealing with only the parentheses
# - which means remove all other characters from string
# - loop or iterate over the parentheses remaining
# - change the pairs with empty strings, until all are gone
# - if there are remaining parentheses then I can return false
# - see if the old string is equal to the new string?

# mental model =
# >> remove all characters expcept parentheses
# >> count parentheses and return false if odd
# >> if even continue to replace pairs with empty strings
# >> break when the previous string and new string generated are equal to eachther, because this means no changes were made
# >> break if string empty


def balanced?(string)
  
  parentheses = string.chars.select do |char|
    char == "(" || char == ")"
  end.join
  
  return false if parentheses.length.odd?
  
  loop do
    parentheses = parentheses.gsub("()", "")
    if parentheses.empty?
      break
    elsif parentheses.start_with?(")") ||
          parentheses.end_with?("(")
      return false
    end
  end
  true
end
  
LS answer =>
def balanced?(string)
  parens = 0
  string.each_char do |char|
    parens += 1 if char == '('
    parens -= 1 if char == ')'
    break if parens < 0
  end

  parens.zero?
end
  
p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false

# ----------

# Problem
# input = 3 integers or floats
# output = symbol

# problem domain
# - make sure the triangle is valid
# - check that none of the sides are equal to zero
# - sort the values and check that the sum of first two elements is greater than the third element.
# - or else return invalid
# use the count method to determine which type of triangle it is
# - proceed to check if all the values are equal then return equilateral
# - check if two out of three sides are equal then reutnr isolceses
# - otherwise return scalene

def triangle(s1, s2, s3)
  sides = [s1, s2, s3].sort
  
  return :invalid if sides.include?(0)
  return :invalid if sides[0] + sides[1] < sides[2]
  
  if s1 == s2 && s2 == s3
    :equilateral
  elsif s1 == s2 || s2 == s3
    :isosceles
  else
    :scalene
  end
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid

# ----------
# Problem 
# input = 3 integers (represent angles)
# output = symbol (type of triangle or invalid)

# problem domain = 
# - first determine if the triangle is valid
# -- checking if the sum is 180
# -- determine if greater than 0
# - examine each angle to determine if it meets any of the criteria
# - return invalid if not valid
# - return a symbol if it is valid
# - possibly use a case statement or if/else statement
# - store the angle values in an array?
# - Array#any? method return boolean
# - sort the array look at smallest value, to determine if acute
# - if not look if any has 90 degrees
# - otherwise check if greater than 90 for last value return obtuse


# mental model
# >> store values in an array and sum
# >> if the sum is not equal to 180 return invalid
# >> if any values are 0 return invalid
# >> iterate over the array using each
# >> use conditional or case
# >> if the value is less than 90 return acute
# >> if the value is equal to 90 return right
# >> else return obtuse 
# end of method

def triangle(angle1, angle2, angle3)
  angles = [angle1, angle2, angle3]
  return :invalid if angles.sum != 180
  type = ''
  
  angles.each do |angle|
    type = case angle
           when 0        then return :invalid
           when 90       then return :right
           when 91...180 then return :obtuse
           else               :acute
           end
  end
  type
end




p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid

# ----------

# Probelem
# input = integer representing a year
# output = integer representing the number of friday the 13ths in that given year

# problem domain =
# - how many months a year to examine
# - look at the 13th day of each month
# - determine if that day is a friday
# - use a counter to keep track of how many
# - return the counter value after incrementing all months

# mental model 
# >> initialize a counter
# >> I can create a range of (1..12) to iterate over
# >> use a Time method to look at the 13th day across all months
# >> use another Time method to determine is that day is in fact a friday.
# >> increment counter if true
# >> return counter

def friday_13th(year)
  counter = 0
  
  (1..12).each do |month|
    time = Time.new(year, month, 13)
    counter += 1 if time.friday?
  end
  counter
end

p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2

# ----------

# Problem
# input = integer
# output = integer (next featured number after input integer)

# problem domain =
# - increment number and test each number to see if it meets the given conditions
# - number must be odd
# --split to increment based on initial even or odd value
# -- if even icrement by 1 initially and then 2 after
# -- if odd continue incrementing by 2
# - check if multiple of 7 by taking modulus
# - if it is a multiple of seven I can increment by 7
# - **increment number until multilpe of seven, then continue incrementing by seven and checking if the number is odd or even
# - check for multiples of digits within the number
# -- iterate though the number and check if the count for any given digit is great than 1

# mental model
# >> first determine if number is multiple
# >> if not increment and check again
# >> once number is multple of 7
# >> check if odd
# >> check if digits occur once
# >> if true then return number
# >> if not then increment by 7 and try again

def featured(number)
 return :error if number >= 9_876_543_210
  loop do
      number += 1
      if number % 7 == 0 && number.odd?
        multiple_digits = number.to_s.chars.all? do |num|
          number.to_s.count(num) <= 1
        end
      end

      break if multiple_digits == true
  end
  number
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements

# ----------

# Problem
# input = array
# output = sorted array

# problem domain =
# - examine the first element and second element
# - if the first is greater than the second swap the elements
# - if not leave as is
# - examine the second and third element
# - then the thrid and fourth
# - repeat and swap values until no chnages have been made to the array
# - mutate the original array
# - come up with a way to track if changes have been made or not?
# - use a switch or counter
# - use iterator or loop with counter

# mental model
# >> initialize a changes_made constant and set to false
# >> begin a loop
# >> iterate through the array and compare each element to the next element until the second to last one is reached
# >> make swaps of values as needed
# >> if changes are made change the value of changes_made
# >> unless changes_made is false by the end, repeat.
# >> changes_made must be turned back into false before starting again

def bubble_sort!(array)
  loop do
    changes_made = false
    ind = 0
    
    loop do
      break if array[ind] == array.last
      if array[ind] > array[ind + 1]
        array[ind], array[ind + 1] = array[ind + 1], array[ind]
        changes_made = true
      end
      
      ind += 1
    end
    
  break if changes_made == false
  end
  array
end

p array = [5, 3]
p bubble_sort!(array)
p array == [3, 5]

p array = [6, 2, 7, 1, 4]
p bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

p array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
p bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)

# ----------

# Problem
# input = integer
# output = difference of square of sum and sum of squares

# problem domain =
# - obtain values 1 to num
# - sum values and square
# - square each value and then add to total sum
# - take the first sum and subtract the second sum

# mental model
# >> use upto method since it starts a 1 and includees the end value
# >> keep sum of each value
# >> keep another sum of each value after the value is squared
# >> subtraction

def sum_square_difference(num)
  sum1 = 0
  sum2 = 0
  1.upto(num) do |n|
    sum1 += n
    sum2 += (n**2)
  end
  
  (sum1**2) - sum2
end

p sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150
=end
# --- Finish ---