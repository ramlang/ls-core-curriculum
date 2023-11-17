depths = File.read('input.txt')

# count = 0
# num = 0
# depths.each_line do |text|
#   if num < text.to_i
#     count += 1
#   end
#   num = text.to_i
# end

# puts count - 1
# take each line of text, iterrate over it and increment a counter to identify only the times the value is increasing?
# return the number


# part 2

# 199  A      
# 200  A B    
# 208  A B C  
# 210    B C D
# 200  E   C D
# 207  E F   D
# 240  E F G  
# 269    F G H
# 260      G H
# 263        H
# Start by comparing the first and second three-measurement windows. The measurements in the first window are marked A (199, 200, 208); their sum is 199 + 200 + 208 = 607. The second window is marked B (200, 208, 210); its sum is 618. The sum of measurements in the second window is larger than the sum of the first, so this first comparison increased.

# Your goal now is to count the number of times the sum of measurements in this sliding window increases from the previous sum. So, compare A with B, then compare B with C, then C with D, and so on. Stop when there aren't enough measurements left to create a new three-measurement sum.
arr = []
depths.each_line do |text|
  arr << text.to_i
end

puts arr