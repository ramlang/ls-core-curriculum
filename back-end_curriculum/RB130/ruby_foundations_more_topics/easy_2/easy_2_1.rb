def step(n1, n2, n3)
  current_num = n1
  while current_num <= n2
    yield(current_num)
    current_num += n3
  end
  nil
end

step(1, 10, 3) { |value| puts "value = #{value}" }

# value = 1
# value = 4
# value = 7
# value = 10

# solution
def step(start_point, end_point, increment)
  current_value = start_point
  loop do
    yield(current_value)
    break if current_value + increment > end_point
    current_value += increment
  end
  current_value
end