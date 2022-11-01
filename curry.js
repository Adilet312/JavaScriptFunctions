const curry = (fn) => (...args) =>{
    if(fn.length > args.length){
        const g = fn.bind(null, ...args);
        return curry(g)
    }
    return fn(...args);
}
const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 
 const curriedJoin = curry(join)
 
 
 console.log(curriedJoin(1, 2, 3) )// '1_2_3'
 