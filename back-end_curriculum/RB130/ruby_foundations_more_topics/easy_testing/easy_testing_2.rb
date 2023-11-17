# write a minitest assertion that will fail if value.downcase does not return 'xyz'.

assert_equal('xyz', value.downcase)

# solution
assert_equal 'xyz', value.downcase