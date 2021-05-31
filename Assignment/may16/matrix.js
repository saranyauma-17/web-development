const matrix = (arr) => {
    let res = [];
    for(let num of arr)
        res.push(num);
    return res;
}
console.log(matrix([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));
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