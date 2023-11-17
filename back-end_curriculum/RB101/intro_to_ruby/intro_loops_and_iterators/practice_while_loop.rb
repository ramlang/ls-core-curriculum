# conditionals within loops
x = 0

while x <= 10
  if x.odd?
    puts x
  end
  x += 1
end

#conditional loop with next

y = 0

while y <= 10
  if y == 3
    y += 1
    next #NEXT MOVES TO NEXT ITERATION
  elsif y.odd?
    puts y
  end
  y += 1
end

#conditional loop with break

z = 0

while z <= 10
  if z == 7
    break  #BREAK EXITS THE LOOP AND CONTINUES EXECUTING CODE
  elsif z.odd?
    puts z
  end
  z += 1
end