const unionSort = (arr1,arr2) => {
    let res = [];
    for(let ind=0;ind<arr1.length || ind<arr2.length;ind++) {
        if(arr1[ind]!==undefined && res.indexOf(arr1[ind])==-1)
            res.push(arr1[ind]);
        if(arr2[ind]!==undefined && res.indexOf(arr2[ind])==-1)
            res.push(arr2[ind]);
    }
    res.sort((a,b) => a-b);
    return res;
}
console.log(unionSort([1,0,2,3,4], [3,5,6,7,8,13])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 13]
console.log(unionSort([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0])); // [0, 1, 2, 3, 4, 6, 7]
console.log(unionSort([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 10, 100]