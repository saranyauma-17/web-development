const postFix = (str) => {
    let values = str.split(' ');
    let arr = [];
    for(let val of values) {
        if(Number.isNaN(parseInt(val))==false) {
            arr.unshift(parseInt(val));
        }
        else {
            if(arr.length<2)
                return "Error";
            else {
                let b = arr.shift();
                let a = arr.shift();
                switch(val) {
                    case '*':
                        arr.unshift(a*b);
                        break;
                    case '/':
                        arr.unshift(a/b);
                        break;
                    case '%':
                        arr.unshift(a%b);
                        break;
                    case '+':
                        arr.unshift(a+b);
                        break;
                    case '-':
                        arr.unshift(a-b);
                        break;
                    case '**':
                        arr.unshift(a**b);
                        break;
                }
            }
        }
    }
    return arr.shift();
}
console.log(postFix("5 3 1 * + 9 -"));