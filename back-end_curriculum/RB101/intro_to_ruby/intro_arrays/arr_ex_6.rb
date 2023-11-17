
# Fix the error...

names = ['bob', 'joe', 'susan', 'margaret']
names.pop
names.push("Jody")
p names
#names['margaret'] = 'jody'

=begin
TypeError: no implicit conversion of String into Integer
  from (irb):2:in `[]='
  from (irb):2
  from /Users/username/.rvm/rubies/ruby-2.5.3/bin/irb:12:in `<main>'
=end

# my_answer => The error should be fixed by using an integer to refer to the
#  index instead of a string like so => names[3] = 'jody'