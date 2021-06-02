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


/*
Q12. Write a JavaScript function to count the occurrence of a substring in a string?
File name suggestion: count.js
Test Data :
console.log(count(“The quick brown fox jumps over the lazy dog”, ‘the’)); // 2
*/
const count = (str,word) => {
    var count=0,ind = str.toLowerCase().indexOf(word.toLowerCase());
    while(ind!=-1) {
        count++;
        ind = str.toLowerCase().indexOf(word.toLowerCase(),ind+1);
    }
    return count;
}
console.log(count('The quick brown fox jumps over the lazy dog','the'));


/*
Q8. Write a JavaScript program to find the most frequent item of an array. 
File name suggestion: frequent.js
TestData:
console.log(frequent([3, ‘a’, ‘a’, ‘a’, 2, 3, ‘a’, 3, ‘a’, 2, 4, 9, 3])); // a ( 5 times )
console.log(frequent([1, 2, 3, 4, 5])); // 1 ( 1 time )
console.log(frequent([5, 2, 3, 1, 2, 4, 1])); // 2 ( 2 times )
*/
const frequent = (arr) => {
    let details = [];
    let counted = [];
    for(let num of arr) {
        if(counted.indexOf(num)==-1) {
            let current = arr.indexOf(num);
            counted.push(num);
            let temp = {val:num,count:0};
            while(current!=-1){
                temp.count++;
                current = arr.indexOf(num,current+1);
            }
            details.push(temp);
        }
    }
    details.sort((a,b) => ((a.count<=b.count)?1:-1));
    return details[0].val;
}
console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // a ( 5 times )
console.log(frequent([1, 2, 3, 4, 5])); // 1 ( 1 time )
console.log(frequent([5, 2, 3, 1, 2, 4, 1])); // 2 ( 2 times )



/*
Q10. Write a JavaScript program which prints the matrix of the following array. 
File name suggestion: matrix.js
TestData:
console.log(matrix([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));
Sample Output :
[[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27],
[7, 4, 28, 14],
[3, 10, 26, 7]]
*/
const matrix = (arr) => {
    let res = [];
    for(let num of arr)
        res.push(num);
    return res;
}
console.log(matrix([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));



