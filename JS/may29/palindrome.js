const palindrome = (n) => {
    let count=0;
    for(let num = 1;num<=n;num++) {
        if(num == num.toString().split('').reverse().join(''))
            count++;
    }
    return count;
}
console.log(palindrome(15));