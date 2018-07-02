function car(color, top speed){
    var thecar = {};
    thecar.color = color;
    thecar.topspeed = top_speed;
    return theCar; 
}
Var lambo = car("red",300);


//this way is best practice
function Car (color,top_speed){
    this.color;
    this.top_speed;
}
var porsche = new Car ("yellow",200)

function Car(color, top_speed)
this.color;
this.top_speed;
var vin = Math.random()# 10000
this info = function(){
    console.log("Your vin is", vin)
}

Car.portotype.change(color = function(carcolor)){
    this.color = newcolor, //only can acess public prototypes
}
porsche.change(color("blue"));