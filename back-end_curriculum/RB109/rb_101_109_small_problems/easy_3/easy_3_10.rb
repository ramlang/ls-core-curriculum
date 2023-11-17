# Write a method that returns true if its integer argument is palindromic, false otherwise. A palindromic number reads the same forwards and backwards.

# my_answer =>

def palindromic_number?(number)
  p number
  p number.to_s.reverse
  number.to_s == number.to_s.reverse
end

p palindromic_number?(34543) == true
p palindromic_number?(123210) == false
p palindromic_number?(22) == true
p palindromic_number?(5) == true


# further_exploration =>
# Suppose your number begins with one or more 0s. Will your method still work? Why or why not? Is there any way to address this?

p palindromic_number?(00034543) == false
p palindromic_number?(0123210) == true