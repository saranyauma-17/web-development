var cars = ["Volvo","BMW","Tata"];
console.log(cars[3]);
cars.push("Maruti");
console.log(cars[3]);
console.log(cars.pop());
console.log(cars);
console.log(cars.toString());
cars.push();//nothing happens
console.log(cars,cars.length);

console.log(cars.pop());//Tata
console.log(cars.pop());//BMW
console.log(cars.pop());//Volvo
console.log(cars.pop());//undefined
cars.push("Maruthi");


var fruit = ["Banana","Apple","Orange","Kiwi"];
console.log(fruit.shift());//first element
console.log(fruit);
fruit.unshift("Lemon");
console.log(fruit);
fruit[1]="Guava";//arrays are mutable
console.log(fruit);

console.log(fruit.join("*"));

delete fruit[1];//not preferred, creates holes in the array
console.log(fruit,fruit.length);

//splice() => add new elements to the array
//splice(add at,remove count,new elements list)//dynamic addition of elements
fruit.splice(1,1,"Watermelon","Guava","Pomegranate");
console.log(fruit);

fruit.splice(2,1);//delete an element
console.log(fruit);

fruit.splice(2,0,"Guava");
console.log(fruit);

var res = fruit.concat(cars,cars,cars,'cars');
console.log(res);

//methods to print array
for(let ind=0;ind<res.length;ind++) {
    console.log(res[ind]);
}

//for of loop => iterate over all values of the array
for(let num of res){
    console.log(num);
}

