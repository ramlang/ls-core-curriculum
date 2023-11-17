# Write a method that implements a miniature stack-and-register-based programming language that has the following commands:

# n Place a value n in the "register". Do not modify the stack.
# PUSH Push the register value on to the stack. Leave the value in the register.
# ADD Pops a value from the stack and adds it to the register value, storing the result in the register.
# SUB Pops a value from the stack and subtracts it from the register value, storing the result in the register.
# MULT Pops a value from the stack and multiplies it by the register value, storing the result in the register.
# DIV Pops a value from the stack and divides it into the register value, storing the integer result in the register.
# MOD Pops a value from the stack and divides it into the register value, storing the integer remainder of the division in the register.
# POP Remove the topmost item from the stack and place in register
# PRINT Print the register value
# All operations are integer operations (which is only important with DIV and MOD).

# Programs will be supplied to your language method via a string passed in as an argument. Your program may assume that all programs are correct programs; that is, they won't do anything like try to pop a non-existent value from the stack, and they won't contain unknown tokens.

# You should initialize the register to 0.

# minilang('PRINT')
# # 0

# minilang('5 PUSH 3 MULT PRINT')
# # 15

# minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# # 5
# # 3
# # 8

# minilang('5 PUSH POP PRINT')
# # 5

# minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# # 5
# # 10
# # 4
# # 7

# minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# # 6

# minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# # 12

# minilang('-3 PUSH 5 SUB PRINT')
# # 8

# minilang('6 PUSH')
# (nothing printed; no PRINT commands)

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string
# problem domain = set up a register, set up a stack, create commands(methods or variables), add and remove from register or stack, repeat for duration of string until all commands are executed, print values if requested
# explicit reqs = see specified command list, input will not attempt to cause an error, and they won't contain unknown tokens, initialize register to 0
# implicit reqs = include data validation?, print message if print command is not given or leave blank

# mental model = set up empty stack, set up register and set to 0, create methods of command list, take each string and split into its own array, analyze each element of the array to determine what method to executed

# Examples/ Test Cases ---
# ^see above

# Data Structures ---
# input = string
# inbetween = array
# output = # of strings or no string?
# methods = #push, #pop, #split, #each, loop, iterator, operators

# Algorithm ---

# n Place a value n in the "register". Do not modify the stack.
# => set register equal to value given

# PUSH Push the register value on to the stack. Leave the value in the register.
# => add the register value to the stack array

# ADD Pops a value from the stack and adds it to the register value, storing the result in the register.
# => remove from stack array and += it to register value

# SUB Pops a value from the stack and subtracts it from the register value, storing the result in the register.
# => same as above

# MULT Pops a value from the stack and multiplies it by the register value, storing the result in the register.
# => same as above

# DIV Pops a value from the stack and divides it into the register value, storing the integer result in the register.
# => same as above

# MOD Pops a value from the stack and divides it into the register value, storing the integer remainder of the division in the register.
# => same as above

# POP Remove the topmost item from the stack and place in register
# => remove from stack, set register equal to value

# PRINT Print the register value
# => self explainitory

# All operations are integer operations (which is only important with DIV and MOD).

# SET stack to empty array
# SET register to 0
# create methods from command list
# take string input
# split into an array by spaces
# iterate over the array in order to determine how to proceed
# execute the methods and return results
# return once finished

# Code with Intent ---
# def command_list(command, stack, register)
#   case command
#   when Integer
#     register = command
#   when 'PUSH'
#     stack.push(register)
#   when 'ADD'
#     binding.pry
#     register += stack.pop
#   when 'SUB'
#     register -= stack.pop
#   when 'MULT'
#     register *= stack.pop
#   when 'DIV'
#     register /= stack.pop if stack.pop != 0
#   when 'MOD'
#     register %= stack.pop if stack.pop != 0
#   when 'POP'
#     register = stack.pop
#   when 'PRINT'
#     puts register
#   end
# end

require 'pry' #minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
def minilang(string)
  stack = []
  register = 0
  string.split.each do |command|
    puts "this is the current register #{register}"
    puts "this is the current stack #{stack}"
      case command
      when 'ADD'   then register += stack.pop
      when 'SUB'   then register -= stack.pop
      when 'MULT'  then register *= stack.pop
      when 'DIV'   then register /= stack.pop
      when 'MOD'   then register %= stack.pop
      when 'PUSH'  then stack.push(register)
      when 'POP'   then register = stack.pop
      when 'PRINT' then puts register
      else              register = command.to_i
      end
  end
end

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


# correct_answer =>
def minilang(program)
  stack = []
  register = 0
  program.split.each do |token|
    case token
    when 'ADD'   then register += stack.pop
    when 'DIV'   then register /= stack.pop
    when 'MULT'  then register *= stack.pop
    when 'MOD'   then register %= stack.pop
    when 'SUB'   then register -= stack.pop
    when 'PUSH'  then stack.push(register)
    when 'POP'   then register = stack.pop
    when 'PRINT' then puts register
    else              register = token.to_i
    end
  end
end

# had to look at answer in order to solve; I had the case statement almost exactly the same but there were some logic errors and type errors

# further_exploration =>
# Try writing a minilang program to evaluate and print the result of this expression:

# (3 + (4 * 5) - 7) / (5 % 3)