//Math 1:
// Write a function called zero_negativity().This function should take an array.Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0 ){
            return true;
        }        

    }
    return false

}
let test = zero_negativity([1,2,3,-4]);
console.log(test)

//Math 2:
// Write a function called is_even().This function should take an number.Return true if the input number is even, return false if the number is odd.
function is_even(num){
    if (num % 2 == 1){
        return false;
    }
    return true;

}
let test2 = is_even(5);
console.log(test2)

//Math 3:
//Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr){
    count = 0;
    for (var i = 0; i < arr.length; i++){
        if(is_even(i) == true){
            count += 1;

        }
    }
    return count;

}
let test3 = how_many_even([1,3,4,6,8,9,10]);
console.log(test3)

//Math 4:
//Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        randomNum = Math.floor(Math.random() * 10);
        arr.push(randomNum);

    }
    return arr
}
let test4 = create_dummy_array(5);
console.log(test4)

//Math 5
//Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.
function random_choice(arr){
    var rand = Math.floor(Math.random() * arr.length);
    return rand;    
}
let test5 = random_choice([1,2,3,4,5]);
console.log(test5);