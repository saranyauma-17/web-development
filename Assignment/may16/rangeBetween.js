const rangeBetween = (start,end,step) => {
    let res = [];
    for(;start <= end;start += step) {
        res.push(start);
    }
    return res;
}
console.log(rangeBetween(4, 7, 1)); // [4, 5, 6, 7]
console.log(rangeBetween(-4, 7, 2)); // [-4, -2, 0, 2, 4, 6]