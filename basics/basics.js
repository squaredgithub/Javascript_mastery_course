// "use strict";

//variables

// //mutable-can be changed

// var x=2;
// let  y = 6;
// //immutable-can not be changed
// const z=8;
// const pi =3.142;

// console.log("Hello world");

// x=3;

// //pi =3.5;
// console.log(x)

// //console.log(pi)
// Operators-
//user input
// let food = prompt("how much is your food");
// var tipPercentage = prompt("rates charge?")/100;
// var tipAmount = food*tipPercentage;
// alert(tipAmount);

//DATA TYPES
//1.Numbers
//2.Strings
// var name = "Alice";
// var greeting = "Hello, " + name + "!";
// console.log(greeting);//output 

// //variable naming
//  //var carmel = myName;
//  let snake_case = "myself";
// //3.Booleans
// var isSunny = false;
// if (isSunny) {
//     console.log("It's sunny today!");
// }else {
//     console.log("otherwise");
// }
//4.Objects (arrays)
//objects (functions)
/*
math operations
-divide /
-exponents **
-modulus %
-add +
subtract -

/*math methods
floor-round down
ceil-up
random -math.random()
*/ 


/* conditonal operators
 == , ====,>,<,<=,>=,!=,!==
 */

 //sample weather app
//  let weather = prompt("how is the weather");

//  if (weather == "rain") {
//     alert("Grab your umbrella");

//  }else {
//     alert("wear light");
//  }


//functions
function sayMyName(name){
    console.log(name);
}
//sayMyName("Njuguna");

function sayMyName1(){
    console.log("Njuguna");
}
//sayMyName1();
//template literals provide an easy way to interpolate variables
//and expression into strings...interpolation is an efficient way of concatenation
function greeting(name1){
    //console.log("hi " +name+",Nice to meet you")
    greeet= `hi ${name1}, Nice to meet you!`
    console.log(greeet)
}
greeting("francis")

//return- the statement stops the execution of a function and returns a value
function sum(a,b){
    return a+b
    // console.log(a+b)
}
//sum()
// num1 = sum(1,2)
// console.log(num1)

function calculateFoodTotal(food,tip){
    tipPercentage =tip/100;
    tipAmount = food*tipPercentage;
    total = sum(food,tipAmount);
    return total
}

//console.log(calculateFoodTotal(300,20)) 

//ES6
//aRROW FUNCTIONS ALLow us to write shorter functions syntax
//arrow functions =>
//arrow function with explicit return
const sumArrow = (a,b)=>{
    return a+b
}
//arrow function with implicit return---remove curly braces
const sumArrow2 =(a,b)=>a+b

console.log(sumArrow2(10,50))