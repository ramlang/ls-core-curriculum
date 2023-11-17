=begin
def greet(person)
  puts "Hello, " + person
end

greet("John")
greet(1)
=end

def spaced_out_letters(person)
  return person.split("").join(" ")
end

def greet(person)
  return "H e l l o, " + spaced_out_letters(person)
end

def decorate_greeting(person)
  puts "" + greet(person) + ""
end

decorate_greeting("John")
decorate_greeting(1)
