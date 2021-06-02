const invert = (arr) => {
    let res = [];
    for(let val of arr) {
        let temp = {};
        for(let entry in val) {
            temp[val[entry]] = entry;
        }
        res.push(temp);
    }
    return res;
}
console.log(invert([ 
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
 [ 
    {
        'Bill Gates': 'author',
        'The Road Ahead': 'title',
        true: 'readingStatus'
    },
    {
        'Steve Jobs': 'author',
        'Walter Isaacson': 'title',
        true: 'readingStatus
    },
    {
        'Suzanne Collins': 'author',
        'Mockingjay: The Final Book of The Hunger Games': 'title',
        false: 'readingStatus
    }
 ]
 */