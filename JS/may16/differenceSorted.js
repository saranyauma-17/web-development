const differenceSorted = (arr1,arr2) => {
    let res = [];
    for(let ind = 0;ind < arr1.length || ind < arr2.length; ind++) {
        if(arr1[ind]!==undefined && res.indexOf(arr1[ind])==-1)
            res.push(arr1[ind]);
        if(arr2[ind]!==undefined && res.indexOf(arr2[ind])==-1)
            res.push(arr2[ind]);
    }
    res.sort((a,b) => a-b);
    return res;
}

console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); // [“1”, “2", “3”, “10", “100”]
console.log(differenceSorted([1, 2, 3, 4, 5], [6, 1, 2, 3, 4, 5])); // [“1", “2”, “3", “4”, “5", “6”]
console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); // [“1", “2”, “3", “10”, “100"]
