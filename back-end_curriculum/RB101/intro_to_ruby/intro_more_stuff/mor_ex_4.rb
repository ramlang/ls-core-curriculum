# Change #2 to function properly...

def execute(&block)
  block.call  # added .call
end

execute { puts "Hello from inside the execute method!" }
