const stringChop = (str,count=0) => {
    var arr = [];
    if(count==0)
        count = str.length;
    for(let ind=0;ind<str.length;ind+=count){
        arr.push(str.substr(ind,count));
    }
    return arr;
}
console.log(stringChop('w3resource'));
console.log(stringChop('w3resource',2));
console.log(stringChop('w3resource',3));