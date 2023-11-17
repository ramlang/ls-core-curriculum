contact_data = ["joe@email.com", "123 Main st.", "555-123-4567"]
contacts = {"Joe Smith" => {}}

information = [:email, :address, :phone]
new_hash = {}

contact_data.each do |data|
  information.each do |info|
    new_hash[info] = contact_data.shift
  end
end

contacts["Joe Smith"] = new_hash

p contacts