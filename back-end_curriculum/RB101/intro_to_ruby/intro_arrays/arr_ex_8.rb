# Create an array and a new array by iteration and incrementing by 2.
# display both arrays using p instead of puts

#my_answer =>
ray = [42, 23, 56, 82, 59, 32, 11, 91]
new_ray = ray.map { |i| i + 2}
p "#{ray}"
p "#{new_ray}"

# example_of_answer =>
arr3 = [1, 2, 3, 4, 5]
new_arr3 = []

arr3.each do |n|
  new_arr3 << n + 2
end

p arr3
p new_arr3

#creates two separate arrays
#one array is filled
#one array is empty
#iterate over filled array using .each
#add incremented values to empty array using <<
# p both arrays
