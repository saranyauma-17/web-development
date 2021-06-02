const strLen = (str) => {
    let res,count=0;
    str = str.trim();
    res = str.split(' ');
    for(let arr of res)
        count+=arr.length;
    return count;
}
console.log(strLen(" Lorem   a   Ipsum   "))