# write a minitest assertion that will fail if the class of value is not Numeric of one of Numeric's subclasses (Integer, Float, etc.)

assert_kind_of Numeric, value
assert_kind_of Integer, value
assert_kind_of Float, value