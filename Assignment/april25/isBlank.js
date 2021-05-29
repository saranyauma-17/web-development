const isBlank = (str) => {
    // return (str.length==0)?true:false;
    return !str.length;
}
console.log(isBlank(''));
console.log(isBlank('abc'));