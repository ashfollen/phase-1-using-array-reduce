const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here. 

const totalBatteries = batteryBatches.reduce(function(accumulator, element) {return accumulator + element},0)

console.log(totalBatteries);


// Code Along with Lesson - not used for lab


//First method - specific version
//Iterate through products in the basket and add the price of each to the total. Return the totalPrice.
/*
const products = [
    {name: 'Shampoo', price: 4.99},
    {name: 'Donuts', price: 7.99},
    {name: 'Cookies', price: 6.49},
    {name: 'Bath Gel', price: 13.99}
];

function getTotalAmountForProducts(products) {
    let totalPrice = 0;

    for (const product of products) {
        totalPrice += product.price;
    };

    return totalPrice;
}

console.log(getTotalAmountForProducts(products));
*/
//Second method - more dynamic, generalized function that accepts two additional arguments: an initial value and a callback function that implements the reduce functionality
/*
const couponLocations = [
    {room: 'Living room', amount: 5},
    {room: 'Kitchen', amount: 2},
    {room: 'Bathroom', amount: 1},
    {room: 'Master bedroom', amount: 7},
];



function ourReduce(arr, reducer, init) {
    //arr = array, reducer = callback function, init = inital value for our accumulator variable
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    };
    //iterates over array, calling the reducer function each time, which returns the updated value of the accumulator
    return accum;
    //final value of accumulator is called 
}

function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
}

console.log(ourReduce(couponLocations, couponCounter, 0));
*/
// reduce() method
// used when we want to get some information from each element in the collection and gather that information into a final summary value
/*
console.log(couponLocations.reduce(couponCounter, 0));

// another simple numerical example

const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator},0);

console.log(doubledAndSummed);
*/
//calling .reduce() on our input array and passing it two arguments: the callback function, and an optional start value for the accumulator (0 in this example). .reduce() execute the callback for each element in turn, passing in the cuurent value of the accumulator and the current element each time. The callback updates the value of the accumular in each iteration, and that updated value is the passed as the firs targument to the callback in the next iteration. When there's nothing left to iterate, the final value of the accumularot (the total) is returned. 

//Initialization value is optional. 
//If no initial valie is supplied, the first element in the array is used as the starting value. reduce() then executes the callback function, passing this starting value and the second element of the array as the two arguments. In other words, the code inside the callback is never executed for the first elememtn in the array. 
//In some cases, it won't matter. BEST TO ALWAYS PASS A START VALUE WHEN CALLING REDUCE()
/*
const doubledAndSummedWithNoInit = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator});

console.log(doubledAndSummedWithNoInit)
*/
//USING REDUCE() WITH AN OBJECT AS THE RETURN VALUE

//starting value
/*
const hogwartsHouses = {
    "Slytherin": [],
    "Gryffindor": [],
    "Hufflepuff": [],
    "Ravenclaw": []
}
*/
//sortingHat object that includes an assign() method. Takes the name of a student as its argument and returns the name of the house the student should be assigned to. 
//sortingHat.assign(studentName);

//to update our hogwartsHouses object, call reduce on our input array (which contains the names of all incoming students), passing a callback function and the start value of hogwartsHouses as the arguments. The callback is where we'll push each student name into the appropriate house:
 /*
incomingStudents.reduce(function(houses, student) {houses[sortingHat.assign(student)].push(student)}, hogwartsHouses)
*/
//.reduce executes the callback for each student name in turn
//inside the callback, the stortingHat.assign() method is called with the current student name as its argument. 
//assign() returns the name of a Hogwarts house, which is then used as the key to access the correct array in the hogwartsHouses objet and push the studen'ts name into it. 
//Iteration continues to next element in the array, passing the next student name and the updated value of hogwartsHouses as the arguments
//once reduce() has iterated through all the students in incomingStudents, it returns the final value of howartsHouses. 

//Access the list of students in any Howarts house:
//hogwartsHouses["Gryffindor"]






