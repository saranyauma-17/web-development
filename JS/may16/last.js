const first = (arr,count) => {
    if(count===undefined)
        count=1;
    if(count<0)
        count=0;
    count*=-1;
    var res = arr.slice(count);
    return res;
}

console.log(first([7, 9, 0, -2])); // -2
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [9, 0, -2]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]