const flatten = (arr,depth) => arr.reduce( (acc, item) =>  depth!==0 && Array.isArray(item) ? acc.concat(...flatten(item,depth-1)) : [...acc,item],[]);

console.log(flatten([2,3,[4,5,6,[3,1,[7,1]]]],2))