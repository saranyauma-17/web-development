const count = (str,word) => {
    var count=0,ind = str.toLowerCase().indexOf(word.toLowerCase());
    while(ind!=-1) {
        count++;
        ind = str.toLowerCase().indexOf(word.toLowerCase(),ind+1);
    }
    return count;
}
console.log(count('The quick brown fox jumps over the lazy dog','the'));