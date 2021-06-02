const insert = (num) => {
    var res = '';
    var flag=0;
    while(num!=0) 
    {
        let digit = parseInt(num%10);
        num=parseInt(num/10);
        if(flag==1 && digit%2==0) {
            res = digit+"-"+res;
        }
        else{
            res = digit+''+res;
        }
        flag=(digit%2==0)?1:0;
    }
    return res;
}
console.log(insert(82546)); // “0-254-6-8.”
console.log(insert(357)); // 357
console.log(insert(12345)); // 12345
// insert(12);