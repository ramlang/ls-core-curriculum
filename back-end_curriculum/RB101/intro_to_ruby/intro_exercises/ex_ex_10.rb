# Can hash values be arrays? Can you have an array of hashes? (give examples)

# my_answer => you can have an array of hashes, but hash values CAN'T be arrays
# => hash_of_arrays = {:[1, 2, 3, 4] => [3, 4, 5], :[6, 7, 8]=> [3, 2, 1]}
# => array_of_hashes = [{key: 'value', key2: 'value2'}]

# correct_answer => yes you can have both

hash = {names: ['joe', 'susan', 'bob']}
arr = [{name: 'joe'}, {name: 'susan'}, {name: 'bob'}]

#hash values can be array, but the key cannot be a hash
#array can be made up of hashes
