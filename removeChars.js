//Given a string contaning only a, b and c, remove all b and ac.
const removeChars = (input) => {
  let regex = /b|(ac)/g
  are_B_And_AC_Exist = input.match(regex)
  input = input.replace(regex,'');
  return are_B_And_AC_Exist ? removeChars(input) : input;
    
}
   

console.log(removeChars('cabbaabcca'))
//removeChars('ab') // 'a'
//removeChars('abc') // ''
//removeChars('cabbaabcca') // 'caa'