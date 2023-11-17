
def add_three(number)
  return number + 3
  number + 4
end

returned_value = add_three(4)
puts returned_value

# This method returns nil because puts returns nil
def add_three2(n)
  puts n + 3
end

add_three2(5)
add_three2(5).times { puts "Will this work?"} # No it will not work

# This is how the problem can be corrected.
def add_three3(n)
  new_value = n + 3
  puts new_value
  new_value
end

add_three3(5).times { puts "Will this work?"} # yes



def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end


puts add(20, 45)
puts subtract(80,10)


  