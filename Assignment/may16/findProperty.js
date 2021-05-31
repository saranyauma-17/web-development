const findProperty = (obj,required) => {
    if(Object.keys(obj).indexOf(required)==-1)
        return false;
    else
        return true;
}
console.log(findProperty({
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
 }, 'author')); // true
 console.log(findProperty({
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
 }, 'hello')); // false