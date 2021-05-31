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