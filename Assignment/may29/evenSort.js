const evenSort = (n,arr) => {
    let evenArr = [];
    for(let ind = 0;ind < n;ind += 2)
        evenArr.push(arr[ind]);
    evenArr.sort((a,b) => a-b);
    for(let ind = 0,pos = 0;ind < n;ind += 2, pos++) {
        arr[ind] = evenArr[pos];
    }
    return arr;
}
console.log(evenSort(5,[3,9,1,44,6]));