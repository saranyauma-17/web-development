const book = (arr) => {
    let res = [];
    for(let obj of arr) {
        if(obj.readingStatus == false) {
            res.push(`You still need to read '${obj.title}' by ${obj.author}.`);
        }
        else {
            res.push(`Already read '${obj.title}' by ${obj.author}.`)
        }
    }
    return res;
}
console.log(book([ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ]));
 /*
 Output:
 Already read 'Bill Gates' by The Road Ahead.
 Already read 'Steve Jobs' by Walter Isaacson.
 You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
 */