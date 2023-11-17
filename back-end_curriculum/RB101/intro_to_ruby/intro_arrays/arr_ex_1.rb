
#Check to see if number is in arr

arr = [1, 3, 5, 7, 9, 11]
number = 10

def number_in_array(num, array)
  if array.include?(num)
    puts "This array includes the number #{num}"
  else
    puts "#{num} is not in the array"
  end
end

number_in_array(number, arr)

# or...

arr.each do |num|
  if num == number
    puts "#{num} is in the array."
  end
end
