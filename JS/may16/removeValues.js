const removeValues = (arr) => {
    for(let ind = 0;ind<arr.length;ind++) {
        if(Number.isNaN(arr[ind]) || arr[ind] === undefined || arr[ind] == null || arr[ind] == 0 || arr[ind] == '' || arr[ind] == "" || arr[ind] === false)
            arr.splice(ind--,1); 
    }
    return arr;
}
console.log(removeValues([NaN, 0, 15, false, -22,'',undefined, 47, null,""])); // [15, -22, 47]