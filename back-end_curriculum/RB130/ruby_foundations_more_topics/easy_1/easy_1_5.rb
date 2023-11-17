=begin
Problem
input = encyrpted name
output = name
problem domain = decipher and print out each of these names.
implicit/explicit = n/a

mental model = create an array of the alphabet, get the index, add 13 return the character.

Examples
Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu

Data Structure
Array

Algorithim
define method that takes string argument
create alphabet array
separate string into two element array (first name, last name)
iterate over the name
identify the index
add 13 (modulus 13)
use index of alphabet
return first name
continue with last name

Code
=end

# ALPHABET = ('a'..'z').to_a

# def decrypt(name)
#   real_name = ''
  
#   name.split.map do |name|
#     name.chars.each do |char|
#       index = ALPHABET.index(char.downcase)
#       if index == nil
#         real_name << char
#       elsif index < 13
#         real_name << ALPHABET[index + 13]
#       else
#         real_name << ALPHABET[index % 13]
#       end
#     end
#     real_name << " "
#   end
  
#   real_name.strip
# end

# p decrypt('Nqn Ybirynpr')
# p decrypt('Tenpr Ubccre')
# p decrypt('Nqryr Tbyqfgvar')
# p decrypt('Nyna Ghevat')
# p decrypt('Puneyrf Onoontr')
# p decrypt('Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv')
# p decrypt('Wbua Ngnanfbss')
# p decrypt('Ybvf Unvog')
# p decrypt('Pynhqr Funaaba')
# p decrypt('Fgrir Wbof')
# p decrypt('Ovyy Tngrf')
# p decrypt('Gvz Orearef-Yrr')
# p decrypt('Fgrir Jbmavnx')
# p decrypt('Xbaenq Mhfr')
# p decrypt('Fve Nagbal Ubner')
# p decrypt('Zneiva Zvafxl')
# p decrypt('Lhxvuveb Zngfhzbgb')
# p decrypt('Unllvz Fybavzfxv')
# p decrypt('Tregehqr Oynapu')

# solution
ENCRYPTED_PIONEERS = [
  'Nqn Ybirynpr',
  'Tenpr Ubccre',
  'Nqryr Tbyqfgvar',
  'Nyna Ghevat',
  'Puneyrf Onoontr',
  'Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv',
  'Wbua Ngnanfbss',
  'Ybvf Unvog',
  'Pynhqr Funaaba',
  'Fgrir Wbof',
  'Ovyy Tngrf',
  'Gvz Orearef-Yrr',
  'Fgrir Jbmavnx',
  'Xbaenq Mhfr',
  'Fve Nagbal Ubner',
  'Zneiva Zvafxl',
  'Lhxvuveb Zngfhzbgb',
  'Unllvz Fybavzfxv',
  'Tregehqr Oynapu'
].freeze

def rot13(encrypted_text)
  encrypted_text.each_char.reduce('') do | result, encrypted_char|
    result + decipher_character(encrypted_char)
  end
end

def decipher_character(encrypted_char)
  case encrypted_char
  when 'a'..'m', 'A'..'M' then (encrypted_char.ord + 13).chr
  when 'n'..'z', 'N'..'Z' then (encrypted_char.ord - 13).chr
  else                         encrypted_char
  end
end

ENCRYPTED_PIONEERS.each do |encrypted_name|
  puts rot13(encrypted_name)
end