def compute
  block_given? ? yield : "Does not compute."
end
    
p compute { 5 + 3 } == 8
p compute { 'a' + 'b' } == 'ab'
p compute == 'Does not compute.'

# solution
def compute
  return 'Does not compute.' unless block_given?
  yield
end

# further exploration
def compute(value)
  block_given? ? yield(value) : "Does not compute."
end

p compute(4) { |n| n * 20 }
p compute(1) { |n| n }
p compute(40)
