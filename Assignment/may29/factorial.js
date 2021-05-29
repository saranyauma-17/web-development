const factorial = (num) => {
    let res=1;
    for(let itr=2;itr<=num;itr++) {
        res *= itr;
    }
    return res;
}
console.log(factorial(5));