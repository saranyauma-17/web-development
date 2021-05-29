//denoted by {}
const car = {
    //property:value
    color:"red",
    tyre : 4,
    weight:'300 kgs',
    start: function() {
        console.log("Starting the car");
        return 'red 4-wheeler car';
    },
    stop: () => {
        console.log("Stopping the car");
    }
}
console.log(car.start())
car.stop();
//array is an object with property length and method push, pop, join, shift, unshift and so on
//string is an object with property length and method toUpperCase, toLowerCase and so on
//access them as objectName.propertyName
//Everything in js is an object