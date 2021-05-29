const car = {
    //property:value
    color:"red",
    tyre : 4,
    weight:'300 kgs',
}
console.log(car);

car.seats = 6;
car['sold'] = 2000;//key is string
car[1] = 'Driver seat'//key is integer

console.log(car);

delete car['weight'];
console.log(car);

for(let key in car)
    console.log(key,car[key]);

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));//key,value pair

console.log(JSON.stringify(car));//convert to string
console.log(JSON.parse(JSON.stringify(car)));//converts the string back to original form
console.log(car);