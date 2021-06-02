const alternateCase = (str) => {
    for(var ind = 0;ind<str.length;ind++) {
        str = `${str.slice(0,ind)}${(ind%2==0)?(str[ind].toUpperCase()):(str[ind].toLowerCase())}${str.slice(ind+1)}`;
    }
    return str;
}
console.log(alternateCase('samsung'));