# What will each of the 3 puts statements print?

s = 'abc def ghi,jkl mno pqr,stu vwx yz'

puts s.split.inspect
puts s.split(',').inspect
puts s.split(',', 2).inspect

# my_answer =>

puts "['abc', 'def', 'ghi,jkl', 'mno', 'pqr,stu', 'vwx', 'yz']"

puts "['abc def ghi', 'jkl mno pqr' , 'stu vwx yz']"

puts "['abc def ghi', 'jkl mno pqr,stu vwx yz']"