const removeDuplicates = (arr) => {
    for(let index=0;index < arr.length;index++){
        let temp=arr.indexOf(arr[index],index+1);
        while(temp!=-1)
        {
            arr.splice(temp,1);
            temp = arr.indexOf(arr[index],temp);
        }
    }
    return arr;
}
console.log(removeDuplicates([1, 2, 3, 4, 6, 1, 3])); // [1, 2, 3, 4, 6]
console.log(removeDuplicates([1, 4, 7, 0])); // [1, 4, 7, 0]