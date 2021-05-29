const leftRotate = (n,k,arr) => {
    k %= n;
    for(let itr=1;itr<=k;itr++) {
        arr.push(arr.shift());
    }
    return arr;
}
console.log(leftRotate(7,3,[1,2,3,4,5,6,7]));