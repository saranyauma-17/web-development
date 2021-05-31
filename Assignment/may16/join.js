const join = (arr,connector=',') => {
    var res;
    res = arr.join(connector);
    return res;
}
console.log(join(['Red', 'Green', 'White', 'Black'])); // “Red,Green,White,Black”
console.log(join(['Red', 'Green', 'White', 'Black'], '')); // “RedGreenWhiteBlack”
console.log(join(['Red', 'Green', 'White', 'Black'], ',')); // “Red,Green,White,Black”
console.log(join(['Red', 'Green', 'White', 'Black'], '+')); // “Red+Green+White+Black” 