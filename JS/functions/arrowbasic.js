//behavior of "this" is different for arrow function

const hello = () => {
    return "Hello World";
}

const hello2 = () => "Hello World";

const printTxt = (str) => {
    console.log(str);
}

const printTxt1 = str => {
    console.log(str);
}

var constFunc = () => {
    console.log("This is not a constant function");
}
constFunc();
constFunc = 20; //function overwritten
console.log(constFunc);

console.log(hello());
console.log(hello2());

printTxt("Hey");
printTxt1("Hey");