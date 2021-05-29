const searchWord = (str,word) => {
    var count=0,ind = str.indexOf(word);
    while(ind!=-1) {
        count++;
        ind = str.indexOf(word,ind+1);
    }
    return "'"+word+"' occurred "+count+" times";
}
console.log(searchWord('The quick brown fox','fox'));
console.log(searchWord('aa, bb, cc, dd, aa','aa'));