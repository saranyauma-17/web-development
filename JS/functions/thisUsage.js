//in method, 'this' refers to the owner's object

/*

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.

*/
const car = {
    //property:value
    color:"red",
    tyre : 4,
    weight:'300 kgs',
    
    start: function() {//car is the owner of this method
        return `${this.color} ${this.tyre} ${this.weight}`;
        // return "This '"+this.color+"' "+ this.tyre+"-wheeler car weighs "+this.weight;
    },
    stop: () => {
        console.log("Stopping the car");
    }
}
console.log(car.start())


function func() {//open function => no owner
    return this;//no error thrown, because 'this' refers to the window/global object
    //This proves that everything in js is an object (either direct object or indirect object)
}

const func1 = function() {
    return;
}
func();
console.log(this);


/*

Arrow function can't recognize the owner object. 
Hence it goes up by one level and accesses the next nearest parent (window/global parameters)

*/

//does not work here, refer screenshot
window.color="Violet"
window.tyre = 3
window.weight="10 kgs"
const van = {
    //property:value
    color:"green",
    tyre : 6,
    weight:'500 kgs',
    
    start: () => {//van is the owner of this method
        return `${this.color} ${this.tyre} ${this.weight}`;
        // return "This '"+this.color+"' "+ this.tyre+"-wheeler car weighs "+this.weight;
    },
    stop: () => {
        console.log("Stopping the van");
    }
}
console.log(van.start())


