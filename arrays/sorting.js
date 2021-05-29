var fruits = ['Orange','WaterMelon','Grapes','Apple','Banana'];
console.log(fruits.sort());
console.log(sortFruits());
console.log(fruits);

function sortFruits() {
    return fruits.sort();
}


var arr = [23,78,43,1,87,113];
console.log(sort());
// console.log(properSort());
console.log(arrSort());
function sort() {
    return arr.sort();//converts elements into string before sorting
}

function properSort() {
    return arr.sort(function(a,b){
        console.log(`a = ${a} b = ${b}`);
        return a-b //function passed as parameter => Callback function
    });
}

function arrSort() {
    return arr.sort((a,b) => a-b );//function passed as parameter => Callback function
        
}