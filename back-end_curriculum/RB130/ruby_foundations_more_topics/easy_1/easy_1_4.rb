=begin
Problem
input = integer
output = array of divisors of the integer
problem domain = return a list of all the divisors of the postive integer passed in as an argument.
implicit/explicit = can be in any sequence

mental model= create a counter starting at the integer value and take the modulus of the integer. If the modulus gives a remainder than skip value, if the modulus is 0 then add number to array

Examples
divisors(1) == [1]
divisors(7) == [1, 7]
divisors(12) == [1, 2, 3, 4, 6, 12]
divisors(98) == [1, 2, 7, 14, 49, 98]
divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

Data Structure
Array

Algorithim
define method that takes integer argument
create an empty results array
use the times or down_to method
take value from counter and use modulus on integer
if value is 0 then add to array
return the results array

Code
=end

def divisors(int)
  results = []
  
  int.downto(1) do |num|
    results << num if (int % num) == 0
  end
  
  results.sort
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

# solution
def divisors(number)
  1.upto(number).select do |candidate|
    number % candidate == 0
  end
end