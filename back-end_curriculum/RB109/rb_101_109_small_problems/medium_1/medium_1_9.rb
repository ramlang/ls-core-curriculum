# rewrite:
def old_fibonacci(n)
  return n if n < 2
  fibonacci(n - 2) + fibonacci(n - 1)
end

def f(n)
  sum = 0
  n.times do |i|
    sum += i if i <= 2
    sum += (i - 2) + (i - 1)
  end
  sum
end

def fibonacci(n)
  sum = 0
  if n <= 2
    sum += n
  else
    3.upto(n) do |nth|
      sum += ((nth - 1) + (nth - 2))
    end
  end
  sum
end
    
# correct_answer =>
def fibonacci(nth)
  first, last = [1, 1]
  3.upto(nth) do
    first, last = [last, first + last]
  end
  last
end



p fibonacci(20) #== 6765
# fibonacci(100) == 354224848179261915075
# fibonacci(100_001) # => 4202692702.....8285979669707537501