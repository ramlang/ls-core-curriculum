# Rewrite car as a nested array containing the same key-value pairs.

car = {
  type:  'sedan',
  color: 'blue',
  year:  2003
}

# my_answer =>
# initially misread the question :(

[car = [type: 'sedan'], [color: 'blue'], [year: 2003]]


# correct_answer =>

car = [[:type, 'sedan'], [:color, 'blue'], [:year, 2003]]