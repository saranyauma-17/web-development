const first = (arr,count) => {
    if(count===undefined)
        count=1;
    if(count<0)
        count=0;
    var res = arr.slice(0,count);
    return res;
}

console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [7, 9, 0]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // []