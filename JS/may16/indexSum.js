const indexSum = (arr1,arr2) => {
    let res = [];
    for(let ind=0;ind<arr1.length || ind<arr2.length; ind++) {
        res.push((arr1[ind]=== undefined ?0:arr1[ind])+(arr2[ind]===undefined?0:arr2[ind]));
    }
    return res;
}
console.log(indexSum([1,0,2,3,4], [3,5,6,7,8,13])); // [4, 5, 8, 10, 12, 13]
console.log(indexSum([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0])); // [2, 6, 10, 4, 6, 1, 3]