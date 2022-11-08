//Given a string contaning only a, b and c, remove all b and ac.
const removeChars = (input) => {
  let regex = /b|(ac)/g
  are_B_And_AC_Exist = input.match(regex)
  input = input.replace(regex,'');
  return are_B_And_AC_Exist ? removeChars(input) : input;
    
}
   

console.log(removeChars('cabbaabcca'))
function findSingle(arr) {
  return arr.reduce( (acc, item, index) => {
    const lastIndex = arr.lastIndexOf(item);
    console.log(arr[lastIndex])
    if(!(arr[lastIndex]===item[index])){
      
    }else{
      acc+=item;
    }
     return acc;
    },0)
}

const arr = [10, 2, 2 , 1, 0, 0, 10]
console.log(findSingle(arr));
//removeChars('ab') // 'a'
//removeChars('abc') // ''
//removeChars('cabbaabcca') // 'caa'