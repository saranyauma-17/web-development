/*
Q6. Write a JavaScript function to capitalize the first letter of each word in a string?
File name suggestion: capitalizeWords.js
Test Data :
console.log(capitalizeWords(‘js string exercises’)); // “Js String Exercises”
*/
const capitalizeWords = (str) => {
    for(var ind = 0;ind<str.length;ind++) {
        if(ind==0 || (str.charAt(ind-1)==' ' &&(str.charAt(ind)>='a'&& str.charAt(ind)<='z'))) {
            str = `${str.slice(0,ind)}${str.charAt(ind).toUpperCase()}${str.slice(ind+1)}`;
        }
    }
    return str;
}
console.log(capitalizeWords('js string exercises'));