# write a minitest assertion that will fail if value is not an isntance of the Numeric class exactly. value may not be an instance of one of Numeric's superclasses.

assert_instance_of(Numeric, value)

# solution
assert_instance_of Numeric, value