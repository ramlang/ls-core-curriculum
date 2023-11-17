#Example of a method definition that modifies its argument permanently

a = [1,2,3]

def mutate(array)
  array.pop
end

p "before mutate method: #{a}"
p mutate(a)
p "after mutate method: #{a}"


a = [1,2,3]

def no_mutate(array)
  array.last
end

p "before mutate method: #{a}"
p no_mutate(a)
p "after mutate method: #{a}"

