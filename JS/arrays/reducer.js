//gives single output of required datatype. Does not return an array
var arr = [4,1,2,8,7,5,6];
console.log(arr.reduce((accumulator,currValue,ind,array) => {
    accumulator +=currValue;
    console.log("Adding index:",ind,"From array:",array);
    return accumulator;
},0));//sum of elements