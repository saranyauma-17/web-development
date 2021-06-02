const createArray = (count,str) => {
    let res = [];
    while(count--)
        res.push(str);
    return res;
}
console.log(createArray(3, 'default value')); // [“default value”, “default value”, “default value”]
console.log(createArray(4, 'password')); // [“password”, “password”, “password”, “password”]