//1:
console.log(hello);
var hello = 'world'; // this will output an undefine

//2:
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle); // Outputs: magnet
}

//3:
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan); // Outputs: will not print anything 
}
console.log(brendan); // Outputs: super cool

//4:
var food = 'chicken';
console.log(food); // Outputs: chicken
eat(); // Outputs: half-chicken
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//5:
// mean(); // Outputs: creats an exception error, the program doesn't get to run because of it
// console.log(food);  
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//6:
console.log(genre); // Outputs: undefine
var genre = "disco";
rewind(); // Outputs: rock, r&b
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // Outputs: disco

//7:
dojo = "san jose"; 
console.log(dojo); // Outputs: san jose
learn(); // Outputs: seattle, burbank
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); // Outputs: san jose