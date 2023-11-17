def convert_to_base_8(n)
  n.to_s(8).to_i
end

base8_proc = method(:convert_to_base_8).to_proc

p [8, 10, 12, 14, 16, 33].map(&base8_proc)

=begin
our convert_to_base_8 method takes a number-like argument n. We also see #to_s(n) using a number-like argument. We find that this form of #to_s converts integers into the String representation of a base-n number. We also want an Integer so we call #to_i.

base8_proc = method(argument)).to_proc

we look at method from class Object. a symbol of an existing method may be passed into method => method(sym). If we do that the functionality of that method gets wrapped in a Method object and we can do work on that object.

we want to convert our array of numbers to base 8 so it makes sense to make a method object out of the convert_to_base_8 method.

base_8_proc = method(convert_to_base_8).to_proc

we want to access the functionality of method convert_to_base_8 and we know that it has been converted to a Proc object. Using & and not &: lets us turn a Proc object to a block. a block can now be usesd with map.

How does an object look like when it is converted to a Proc?

Proc.new { |n| n.to_s(8).to_i }

=end

def convert_to_base_8(n)
  n.to_s(8).to_i
end

Proc.new { |n| n.to_s(8).to_i }

[8, 10, 12, 14, 16, 33].map { |n| n.to_s(8).to_i }

