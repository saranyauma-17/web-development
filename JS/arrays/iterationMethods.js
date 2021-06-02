var arr = [5,3,2,7,1,4]

console.log(arr.filter((num) => (num%2==1)));

console.log(arr.every((num) => (num%2==1)));//checks whether the whole array is odd
console.log(arr.every((num) => (num>0)));

console.log(arr.some((num) => (num%2==1)));//checks whether at least one element of the array is odd
console.log(arr.some((num) => (num>0)));
console.log(arr.some((num) => (num<0)));

console.log("Find",arr.find((num)=>num>5));//gets the first occurrence
console.log("Find",arr.findIndex((num)=>num>5));//gets the first occurrence

for(let ind=0;ind<arr.length;ind++) {
    console.log(arr[ind]);
}

for(let num of arr) {//useful when break is needed. Other loops don't support break
    console.log(num);
    if(num>5)
        break;
}

arr.forEach((num,ind,array)=>array[ind]=num*2);//only first parameter is mandatory in callback
console.log(arr);
//calls a callback function for each element

//map() => creates a new array, does not change the original array,faster than for each
var res = arr.map((num)=> {num*2})
var res1 = arr.map((num)=> num*2)
console.log(res,res1,arr);
