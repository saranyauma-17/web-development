const arrayClone = (arr) => {
    var res = arr.map((num) => num);
    return res;
}
console.log(arrayClone([1,2,4,0]));
console.log(arrayClone([1,2,[4,0]]));