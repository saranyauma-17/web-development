const product = (arr) => {
    return arr.reduce((res,num)=>res*=num , 1)
}
console.log(product([1, 2, 3, 4])); // 24
console.log(product([1, 4, 7, 0])); // 0