const flatten = (arr,depth) => arr.reduce( (acc,item) => Array.isArray(item) && depth > 1 ? acc.concat(...flatten(item, depth-1)) : acc.concat(item),[])

console.log(flatten([2,3,[4,5,6,[3,1,[7,1]]]],1))