talk = Proc.new do
  puts "I am talking."
end

talk.call

talk2 = Proc.new do |name|
  puts "I am talking to #{name}."
end

talk2.call "Widward"

#passing_proc

def take_proc(widward)
  [1, 2, 3, 4, 5].each do |number|
    widward.call number
  end
end

variable = Proc.new do |number|
  puts "#{number}. Proc being called in the method."
end

take_proc(variable)