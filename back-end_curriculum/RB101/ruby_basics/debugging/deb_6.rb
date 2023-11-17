# You want to have a small script delivering motivational quotes, but with the
# following code you run into a very common error message: no implicit
# conversion of nil into String (TypeError). What is the problem and how can
# you fix it?

def get_quote(person)
  if person == 'Yoda'
    'Do. Or do not. There is no try.'
  end

  if person == 'Confucius'
    'I hear and I forget. I see and I remember. I do and I understand.'
  end

  if person == 'Einstein'
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end
puts 'Confucius says:'
puts '"' + get_quote('Confucius') + '"'

# my_answer =>

# The problem is the if statement is not being used properly. The method is
# returning nil because the block of if statements are not connected. Therefore
# only the last if statement has the possibility of being returned. If you use
# proper if/else statement, each if or else can have their last line of code
# returned.

def get_quote(person)
  if person == 'Yoda'
    'Do. Or do not. There is no try.'
  elsif person == 'Confucius'
    'I hear and I forget. I see and I remember. I do and I understand.'
  else person == 'Einstein'
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts '"' + get_quote('Confucius') + '"'


# example_of_answer/ correct_answer =>

def get_quote(person)
  if person == 'Yoda'
    return 'Do. Or do not. There is no try.'
  end

  if person == 'Confucius'
    return 'I hear and I forget. I see and I remember. I do and I understand.'
  end

  if person == 'Einstein'
    return 'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

# The last line is an if statement, which returns the evaluated result of the
# branch whose condition evaluates as true, or nil if there is no such branch. 
# This caused our original method to return nil every time an argument other
# than 'Einstein' is passed in.




