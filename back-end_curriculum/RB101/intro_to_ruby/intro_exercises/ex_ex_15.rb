# What will the following program output?"

hash1 = {shoes: "nike", "hat" => "adidas", :hoodie => true}

hash2 = {"hat" => "adidas", :shoes => "nike", hoodie: true}

if hash1 == hash2
  puts "These hashes are the same!"
else
  puts "These hashes are not the same!"
end

# hash1 = {:shoes=>"nike", "hat"=>"adidas", :hoodie=>true}
# hash2 = {"hat"=>"adidas", :shoes=>"nike", :hoodie=>true}

# my_answer =>
# These hashes are not the same!

# correct_answer => 
# These hashes are the same!
# order does not matter with hashes because of keys
