const repeat = (str,count=1) => {
    var txt = str;
    for(let itr=1;itr<count;itr++) {
        txt = txt.concat(str);
    }
    return txt;
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));