const insert = (original, added=' ', position=0) => {
    var res = `${original.slice(0,position)}${added} ${original.slice(position)}`;
    return res;
}
console.log(insert("We are doing some exercises"));
console.log(insert("We are doing some exercises","Javascript"));
console.log(insert("We are doing some exercises","Javascript",18));