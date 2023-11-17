# Reworking of Ruby Basics exercises for RB109

# --- Loop 2 ---

# count = 1

# loop do
#   puts count.odd? ? "#{count} is odd" : "#{count} is even"
#   count += 1
#   break if count > 5
# end

# ----------

# loop do
#   number = rand(100)
#   puts number
#   break if (0..10).include?(number)
# end

# ----------

# process_the_loop = [true, false].sample

# if process_the_loop
#   loop do
#     puts "The loop was processed"
#     break
#   end
# else
#   puts "The loop wasn't processed"
# end

# ----------

# loop do
#   puts 'What does 2 + 2 equal?'
#   answer = gets.chomp.to_i
#   if answer == 4
#     puts "That's correct!"
#     break
#   end
#   puts "Wrong answer. Try again!"
# end

# ----------

# numbers = []

# loop do
#   puts 'Enter any number:'
#   input = gets.chomp.to_i
#   numbers << input
#   break if numbers.size == 5
# end
# puts numbers

# ----------

# names = ['Sally', 'Joe', 'Lisa', 'Henry']

# loop do
#   puts names.pop
#   break if names.size == 0
# end

# ----------

# 5.times do |index|
#   puts index
#   break if index == 2
# end

# -----------

# number = 0

# until number == 10
#   number += 1
#   next if number.odd?
#   puts number
# end

# ----------

# number_a = 0
# number_b = 0

# loop do
#   number_a += rand(2)
#   number_b += rand(2)

#   next unless number_a == 5 || number_b == 5
  
#   puts "5 was reached!"
#   break
# end

# ----------

# def greeting
#   puts 'Hello!'
# end

# number_of_greetings = 2

# while number_of_greetings > 0
#   greeting
#   number_of_greetings -= 1
# end

# --- User Input ---

# def ruby_repeater
#   puts "Type anything you want: "
#   user_input = gets.chomp
#   puts user_input
# end

# ruby_repeater

# ----------

# def age_to_months
#   puts ">> What is your age in years?"
#   age = gets.chomp.to_i
#   puts "You are #{age * 12} months old."
# end

# age_to_months

# further_exploration
# When you call #to_i on a non-numeric value it will return 0.

# ----------

# def print_something
#   puts "Do you want me to print something? (y/n)"
#   answer = gets.chomp
#   return unless answer == 'y'
#   puts "something"
# end

# print_something

# further_exploration =>
# answer = gets.chomp.downcase

# ----------

# def something2
#   loop do
#     puts "Do you want me to print something? (y/n)"
#     answer = gets.chomp.downcase
    
#     return if answer == 'n'
#     break if answer == 'y'
#     puts "Error. Please try again."
#   end
#   puts "something"
# end
  
# something2

# -----------

# def lsprint
#   number = 0
#   loop do
#     puts "How many lines of output do you want? (Must be 3 or great): "
#     number = gets.to_i
#     break if number >= 3
#     puts "Please try again. Number must be 3 or greater: "
#   end
#   number.times do 
#     puts "Launch School is the best!"
#   end
# end

# lsprint

# ----------

# PASSWORD = 'password'

# def password
#   loop do
#     puts "Please enter your password: "
#     answer = gets.chomp
#     break if answer === PASSWORD
#     puts "Invalid passowrd. Please try again."
#   end
#   puts "Welcome!"
# end

# password

# ----------

# USERNAME = 'user'
# PASSWORD = 'password'

# def user_and_password
#   loop do
#     puts "Please enter your username: "
#     input_user = gets.chomp
    
#     puts "Please enter your password: "
#     input_password = gets.chomp
    
#     if input_user == USERNAME && input_password == PASSWORD
#       break
#     end
#     puts "Invalid! Please try again."
#   end
#   puts "Welcome!"
# end

# user_and_password

# ----------

# def valid_number?(number_string)
#   number_string.to_i.to_s == number_string
# end

# def division
#   numerator = ''
#   denominator = ''
  
#   loop do
#     print "Enter a numerator >> "
#     numerator = gets.chomp
#     break if valid_number?(numerator)
#     puts "Invalid number!"
#   end
  
#   loop do
#     print "Enter a denominator >> "
#     denominator = gets.chomp
#     if valid_number?(denominator)
#       if denominator.to_i == 0
#         puts "Invalid number! A denominator of 0 is not allowed."
#       else
#         break
#       end
#     else
#       puts "Invalid number!"
#     end
#   end
  
#   puts "#{numerator.to_i} / #{denominator.to_i} is #{numerator.to_i/denominator.to_i}"
# end

# division

# ----------

# def q_to_quit
#   loop do
#       number_of_lines = nil
#     loop do
#       puts '>> How many output lines do you want? Enter a number >= 3 (Q/q to quit):'
#       number_of_lines = gets.chomp
#       return if number_of_lines.downcase == 'q'
#       break if number_of_lines.to_i >= 3
#       puts ">> That's not enough lines."
#     end
    
#     number_of_lines = number_of_lines.to_i
    
#     while number_of_lines > 0
#       puts 'Launch School is the best!'
#       number_of_lines -= 1
#     end
#   end
# end

# q_to_quit

# ----------

# def valid_number?(number_string)
#   number_string.to_i.to_s == number_string && number_string.to_i != 0
# end

# def opposites
#   num1 = ''
#   num2 = ''
  
#   loop do
#     print "Enter a positive or negative number >> "
#     num1 = gets.chomp
    
#     print "Enter a positive or negative number >> "
#     num2 = gets.chomp
    
#     if valid_number?(num1) && valid_number?(num2)
#       num1 = num1.to_i
#       num2 = num2.to_i
      
#       if (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)
#         break
#       else
#         puts "Invalid numbers. One must be positive and one must be negative!"
#       end
      
#     else
#       puts "Invalid numbers. Try again!"
#     end
#   end
  
#   puts "#{num1} + #{num2} = #{num1 + num2}"
# end

# opposites

# --- Methods ---

# def print_me
#   puts "I'm printing within the method"
# end

# print_me

# ----------

# def print_me
#   "I'm printing the return value"
# end

# puts print_me

# ----------

# def hello
#   "Hello"
# end

# def world
#   "World"
# end

# puts "#{hello} #{world}"

# ----------

# def hello
#   "Hello"
# end

# def world
#   "World"
# end

# def greet
#   hello() + " " + world()
# end

# puts greet

# ----------

# def car(make, model)
#   puts make + " " + model
# end

# car("Toyota", "Corolla")

# ----------

# daylight = [true, false].sample

# def time_of_day(time)
#   if time
#     puts "It's daytime!"
#   else
#     puts "It's nighttime!"
#   end
# end

# time_of_day(daylight)

# ----------

# def dog(name)
#   return name
# end

# def cat(name)
#   return name
# end

# puts "The dog's name is #{dog('Spot')}."
# puts "The cat's name is #{cat('Ginger')}."

# ----------

# def assign_name(name= 'Bob')
#   name
# end

# puts assign_name('Kevin') == 'Kevin'
# puts assign_name()== 'Bob'

# ----------

# def add(num1, num2)
#   num1 + num2
# end

# def multiply(num1, num2)
#   num1 * num2
# end

# puts add(2, 2) == 4
# puts add(5, 4) == 9
# puts multiply(add(2, 2), add(5, 4)) == 36

# ----------

# names = ['Dave', 'Sally', 'George', 'Jessica']
# activities = ['walking', 'running', 'cycling']

# def name(array)
#   array.sample
# end

# def activity(array)
#   array.sample
# end

# def sentence(name, activity)
#   "#{name} went #{activity} today!"
# end

# puts sentence(name(names), activity(activities))

# ---------

# sun = ['visible', 'hidden'].sample

# if sun == 'visible'
#   puts "The sun is so bright!"
# end

# ----------

# sun = ['visible', 'hidden'].sample

# puts "The clouds are blocking the sun!" unless sun == 'visible'
# puts "The sun is so bright!" if sun == 'visible'

# ----------

# boolean = [true, false].sample

# boolean ? puts("I'm true!") : puts("I'm false!")

# ----------

# stoplight = ['green', 'yellow', 'red'].sample

# case stoplight
# when 'green' then puts "GO!"
# when 'yellow' then puts "Slow down."
# when 'red' then puts "STOP!"
# end

# -----------

# stoplight = ['green', 'yellow', 'red'].sample

# if stoplight == 'green'
#   puts 'Go!'
# elsif stoplight == 'yellow'
#   puts 'Slow down!'
# else
#   puts 'Stop!'
# end

# ----------

# status = ['awake', 'tired'].sample

# to_do = if status == 'awake'
#           "Be productive!"
#         else
#           "Go to sleep!"
#         end

# puts to_do
  
# ----------

# number = rand(10)

# if number == 5
#   puts '5 is a cool number!'
# else
#   puts 'Other numbers are cool too!'
# end

# -----------

# stoplight = ['green', 'yellow', 'red'].sample

# case stoplight
# when 'green'  then puts 'Go!'
# when 'yellow' then puts 'Slow down!'
# else               puts 'Stop!'
# end

# --- Strings ---

# new_string = String.new("new string")

# puts new_string

# ----------

# puts "It's now 12 o'clock."

# ----------

# name = 'Roger'
# p name.downcase == 'RoGeR'.downcase
# p name.downcase == 'DAVE'.downcase

# ----------

# name = 'Elizabeth'

# puts "Hello, #{name}!"

# ----------

# first_name = 'John'
# last_name = 'Doe'

# full_name = first_name + ' ' + last_name

# puts full_name

# ----------

# state = 'tExAs'

# state.capitalize!
# puts state

# ----------

# greeting = 'Hello!'

# greeting.gsub!('Hello', 'Goodbye')
# puts greeting

# ----------

# alphabet = 'abcdefghijklmnopqrstuvwxyz'

# puts alphabet.chars

# ----------

# words = 'car human elephant airplane'

# words.split.each { |word| puts word + 's'}

# ----------

# colors = 'blue pink yellow orange'

# p colors.include?('yellow')
# p colors.include?('purple')

# --- Arrays ---

# pets = ['cat', 'dog', 'fish', 'lizard']

# my_pet = pets[2]
# puts "I have a pet #{my_pet}"

# ----------

# pets = ['cat', 'dog', 'fish', 'lizard']

# my_pets = pets[2,2]
# puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}"

# ----------

# pets = ['cat', 'dog', 'fish', 'lizard']
# my_pets = pets[2..3]

# my_pets.pop
# puts "I have a pet #{my_pets[0]}."

# ----------

# pets = ['cat', 'dog', 'fish', 'lizard']
# my_pets = pets[2..3]
# my_pets.pop

# my_pets << pets[1]
# puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}."

# ----------

# colors = ['red', 'yellow', 'purple', 'green']
# colors.each { |color| puts "I'm the color #{color}" }

# ----------

# numbers = [1, 2, 3, 4, 5]

# doubled_numbers = numbers.map { |num| num * 2 }
# p doubled_numbers

# ---------

# numbers = [5, 9, 21, 26, 39]

# divisible_by_three = numbers.select { |num| num % 3 == 0 }
# p divisible_by_three

# ----------

# [['Dave', 7], ['Miranda', 3], ['Jason', 11]]

# ----------

# favorites = [['Dave', 7], ['Miranda', 3], ['Jason', 11]]
# p favorites.flatten!

# ----------

# array1 = [1, 5, 9]
# array2 = [1, 9, 5]

# p array1 == array2

# --- Hashes ---

# car = { type: 'sedan', color: 'blue', mileage: 80_000 }

# -----------

# car = { type: 'sedan', color: 'blue', mileage: 80_000 }
# car[:year] = 2003
# p car

# ----------

# car = {
#   type:    'sedan',
#   color:   'blue',
#   mileage: 80_000,
#   year:    2003
# }

# car.delete(:mileage)
# p car

# ----------

# car = {
#   type:    'sedan',
#   color:   'blue',
#   year:    2003
# }

# puts car[:color]

# ----------

# numbers = {
#   high:   100,
#   medium: 50,
#   low:    10
# }

# numbers.each do |key, value|
#   puts "A #{key} number is #{value}"
# end

# ----------

# numbers = {
#   high:   100,
#   medium: 50,
#   low:    10
# }

# half_numbers = numbers.map do |key, value|
#                 value / 2
#               end   

# p half_numbers

# ----------

# numbers = {
#   high:   100,
#   medium: 50,
#   low:    10
# }

# low_numbers = numbers.select do |key, value|
#                 value < 25
#               end
# p low_numbers

# ----------

# numbers = {
#   high:   100,
#   medium: 50,
#   low:    10
# }

# low_numbers = numbers.select! do |key, value|
#                 value < 25
#               end

# p low_numbers
# p numbers

# -----------

# {
#   car: { type: 'sedan', color: 'blue', mileage: 80_000 },
#   truck: { type: 'pickup', color: 'red', year: 1998 }
# }

# -----------

# car = [[:type, 'sedan'], [:color, 'blue'], [:mileage, 80_000]]

# --- Debugging ---

# def predict_weather
#   sunshine = [true, false].sample

#   if sunshine
#     puts "Today's weather will be sunny!"
#   else
#     puts "Today's weather will be cloudy!"
#   end
# end

# ----------

# pets = { cat: 'fluffy', dog: ['sparky', 'fido'], fish: 'oscar' }

# pets[:dog] << 'bowser'
# p pets

# ----------

# numbers = [5, 2, 9, 6, 3, 1, 8]

# even_numbers = numbers.select do |n|
#   n.even?
# end

# p even_numbers

# ----------

def get_quote(person)
  if person == 'Yoda'
    'Do. Or do not. There is no try.'
  elsif person == 'Confucius'
    'I hear and I forget. I see and I remember. I do and I understand.'
  elsif person == 'Einstein'
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts '"' + get_quote('Confucius') + '"'

