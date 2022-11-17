// create objects in an array
var car = new Array();
car[0] = new Object();
car[1] = new Object();



// assining values
car[0].name = "Hyndai";
car[0].color = "black";
car[1].name = "Toyota";
car[1].color = "red";


// printing values using for loop and car[i]
for (var i = 0; i < car.length; i++) {
    // console.log("You've a " + car[i].color + " " + car[i].name);
    car[i]
}
console.log(car);

// empting the array 
var removeCar = new Array();
removeCar = car.pop(1)
console.log(removeCar);


// adding new item to the array
var addCar = new Array();
addCar = car.push(1)
console.log(addCar);