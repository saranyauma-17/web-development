const celToFar = (temp) => {
    let res = (temp*9/5)+32;
    return (res != parseInt(res))? res.toFixed(2):res;
}
console.log(celToFar(12));
console.log(celToFar(10));