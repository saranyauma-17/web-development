var arr = [5,3,2,7,1,4]

for(let ind=0;ind<arr.length;ind++) {
    console.log(arr[ind]);
}

for(let num of arr) {//useful when break is needed. Other loops don't support break
    console.log(num);
    if(num>5)
        break;
}

arr.forEach((num,ind,array)=>console.log(num,ind,array));//only first parameter is mandatory in callback