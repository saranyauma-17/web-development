var str = "Hello World to the whole World"

console.log(str.length);

var str1 = "India is 'my' country";
console.log(str1);

//strings are immutable
str1[0]='A'
console.log(str1);

var txt = str1.replace('i','a');//only first occurence
console.log(txt);

txt=str1.replaceAll('i','a');
console.log(txt);

txt=str1.replace(/i/i,'a');//case insensitive
console.log(txt);

//similar to replaceAll
txt=str1.replace(/i/g,'a');
console.log(txt);

//changing cases
txt = str.toUpperCase();
console.log(txt);

txt = str.toLowerCase();
console.log(txt);

//concatenation
txt = str.concat(".",str1,"!");//variable number of parameters
console.log(txt);
txt = str+"."+str1+"!!";
console.log(txt);

//concatenation with string literal or template literal
txt = `${str}.${str1}!!!`; //`${variable name}characters`
console.log(txt);

var ws = "    spaces are present   "
console.log(ws);
txt = ws.trim();
console.log(txt);


//extracting characters
console.log(str.charAt(0));
console.log(str[0]); //property access []
console.log(str.charCodeAt(0));

//string to array
var arr = str.split(' ');
console.log(arr);
arr = str.split('');
console.log(arr);

//indexof compares is used for literals only and can have offset
console.log(str.indexOf("Wor"));
console.log(str.lastIndexOf("Wor"));
console.log(str.indexOf("Wor",6));//starts from index 6
console.log(str.indexOf("Wor",7));
console.log(str.lastIndexOf("Wor",25));//moves back from 25
console.log(str.lastIndexOf("Wor",24));


//search => used for literals and regular expression
//cannot have offset values
console.log(str.search("Wor"));

//extracting from a string
// slice(start, end) => returns the extracted part [start,end). Accepts negative value
// substring(start, end) => similar to slice but doesn't accept negative values
// substr(start, length) 

var res = str.slice(6,11);
console.log(res);
res = str.slice(6);
console.log(res);
res = str.slice(-11,-6);
console.log(res);
res = str.slice(-11);
console.log(res);

console.log(str.substring(6,11));
console.log(str.substring(6));

console.log(str.substr(6,5));
console.log(str.substr(6));