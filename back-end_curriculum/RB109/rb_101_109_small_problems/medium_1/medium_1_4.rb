# You have a bank of switches before you, numbered from 1 to n. Each switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You go back to the beginning, and on this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back again to the beginning and toggle switches 3, 6, 9, and so on. You repeat this process and keep going until you have been through n repetitions.

# Write a method that takes one argument, the total number of switches, and returns an Array that identifies which lights are on after n repetitions.

# Example with n = 5 lights:

# round 1: every light is turned on
# round 2: lights 2 and 4 are now off; 1, 3, 5 are on
# round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
# round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
# round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
# The result is that 2 lights are left on, lights 1 and 4. The return value is [1, 4].

# With 10 lights, 3 lights are left on: lights 1, 4, and 9. The return value is [1, 4, 9].

# my_answer =>

# PEDAC

# Problem ---
# input is an integer (number of switches)
# output is an array(lights left on)
# problem domain = creating an array of integer legnth to represent switches, the number of switches is also the same as the number of rounds, change the values between off and on, depending on the iteration flip swtiches of the current multiple, return the resulting array of the lights remaining on
# explicit reqs = method takes one argument, argument is the number of switches and the number of repetitions
# implicit reqs = assume positive integers given only, no data validation

# mental model = create an array, create a counter, loop over the array, switch values from true or false, determine current multiples to manipulate switches of, analyziing the index and if the modulus is equal to zero

# Examples/ Test Cases ---
# The result is that 2 lights are left on, lights 1 and 4. The return value is [1, 4].

# With 10 lights, 3 lights are left on: lights 1, 4, and 9. The return value is [1, 4, 9].

# Data Structures ---
# input = integer
# inbetween = array or hash
# output = array
# methods = modulus, #each_index, #values, #keys, #each

# Algorithm ---
# create hash
# set all hash values to true
# if the key of the current iteration modulus is equal to zero then flip switch otherwise skip
# repeat until all iterations have been completed

# Code with Intent ---
require 'pry'
def light_switches(n)
  round = 1
  switches = Array.new(n) { |n| [n + 1, false] }.to_h
  while round <= n
    switches.each do |switch, flip|
      switches[switch] = !flip if switch % round == 0
    end
    round += 1
  end
  
  result = switches.select { |keys, values| values == true }.keys
end

p light_switches(10)
p light_switches(5)


# example_of_answer =>
# initialize the lights hash
def initialize_lights(number_of_lights)
  lights = Hash.new
  1.upto(number_of_lights) { |number| lights[number] = "off" }
  lights
end

# return list of light numbers that are on
def on_lights(lights)
  lights.select { |_position, state| state == "on" }.keys
end

# toggle every nth light in lights hash
def toggle_every_nth_light(lights, nth)
  lights.each do |position, state|
    if position % nth == 0
      lights[position] = (state == "off") ? "on" : "off"
    end
  end
end

# Run entire program for number of lights
def toggle_lights(number_of_lights)
  lights = initialize_lights(number_of_lights)
  1.upto(lights.size) do |iteration_number|
    toggle_every_nth_light(lights, iteration_number)
  end

  on_lights(lights)
end

p toggle_lights(1000)


# further_exploration =>
# There are a few interesting points about this exercise that we can explore:

# Do you notice the pattern in our answer? Every light that is on is a perfect square. Why is that?

# What are some alternatives for solving this exercise? What if we used an Array to represent our 1000 lights instead of a Hash, how would that change our code?

# We could have a method that replicates the output from the description of this problem (i.e. "lights 2, 3, and 5 are now off; 1 and 4 are on.") How would we go about writing that code?