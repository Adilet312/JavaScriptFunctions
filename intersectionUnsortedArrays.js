const getIntersection = (arr1, arr2) => {
    const setA = new Set(arr1);
    const setB = new Set(arr2);
    let list = [];
    for( const item of setA){
        setB.has(item) && list.push(item);
    }
    return list;
}