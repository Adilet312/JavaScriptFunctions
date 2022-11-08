const ROMAN_DICTIONARY_LIST = [
  { key: 'M', value: 1000 },
  { key: 'CM', value: 900 },
  { key: 'D', value: 500 },
  { key: 'CD', value: 400 },
  { key: 'C', value: 100 },
  { key: 'XC', value: 90 },
  { key: 'L', value: 50 },
  { key: 'XL', value: 40 },
  { key: 'X', value: 10 },
  { key: 'IX', value: 9 },
  { key: 'V', value: 5 },
  { key: 'IV', value: 4 },
  { key: 'I', value: 1 },
];
function integerToRoman(num, romanNumber='') {
    if(num > 0){
      const {key, value} = ROMAN_DICTIONARY_LIST.find( ({ value }) => num >= value);
      return integerToRoman(num - value,`${romanNumber}${key}`)
    }
    return romanNumber;
  }
  console.log(integerToRoman(760))