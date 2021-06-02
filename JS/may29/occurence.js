const orderFreq = (n,arr) => {
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
    details.sort((a,b) => ((a.count<b.count || (a.count==b.count && a.val<b.val))?1:-1));
    return details.map((entry) => entry.val)
}
console.log(orderFreq(5,[3,3,4,4,7,8,8,8,8]));