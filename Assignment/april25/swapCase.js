const swapCase = (str) => {
    for(var ind = 0;ind<str.length;ind++) {
        // str = `${str.slice(0,ind)}${(str[ind]>='a' && str[ind]<='z')?(str[ind].toUpperCase()):(str[ind].toLowerCase())}${str.slice(ind+1)}`;
        str = `${str.slice(0,ind)}${(str[ind] == str[ind].toLowerCase())?(str[ind].toUpperCase()):(str[ind].toLowerCase())}${str.slice(ind+1)}`;
    }
    return str;
}
console.log(swapCase('AaBbc'));