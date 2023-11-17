# What is the return?

arr = ["b", "a"]
arr = arr.product(Array(1..3)) # Array = [1, 2, 3]
arr.first.delete(arr.first.last)
puts "#{arr}"
# my_answer => ['b', 2], ['b', 3], ['a', 1], ['a', 2], ['a', 3]
# correct_answer => returns 1 (.delete method returns deleted)

# arr = ['b'], ['b', 2], ['b', 3], ['a', 1], ['a', 2], ['a', 3]

arr2 = ['b', 'a']
arr2 = arr2.product([Array(1..3)]) # Array = [[1 ,2, 3]]
arr2 = arr2.first.delete(arr2.first.last)
puts "#{arr2}"
# my_answer => [['b',[1, 2, 3]], ['a', [1,2,3]]
# correct_answer => returns [1, 2, 3] (.delete method returns deleted)

# arr2 = [['b'], ['a', [1,2,3]]
