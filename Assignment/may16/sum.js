const sum = (arr) => {
    return arr.reduce((res,num)=>res+=num , 0)
}
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([0, 0, 0, 1])); // 1 (edited) 