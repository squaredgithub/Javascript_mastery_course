//Arrays
const all=['hey','there','here'];
// console.log(all);
// //push..... adds at the end
// all.push('wow');
// console.log(all); 

//slice...returns the portion of the array you want in anew array.

 //array slice
 //start from 0 inclusive and upto 2
 //console.log(all.slice(0,2))
 //indexof..
 //length()...returns the number of elements you have in a given array.

//  console.log(all.indexOf('here'))
//  console.log(all.length)

//objects{} 
//key:value
const person = {
    firstName:'francis',
    lastName:'njuguna',
    age:20
}
//dot notation
//console.log(person.age)

//bracket notation
//console.log(person['firstName'])

person.shirt='black'
// console.log(person['shirt'])
// console.log(person)

//es6 arrow function + 2 arguments
//object
//template literals

// const Person = (fName,lName,Age) =>{
//     const print = {
//         fName:fName,
//         lName:lName,
//         Age:Age
//     }

//     const stmt =`Hi, my name is ${print.fName} ${print.lName} and I am ${print.Age} years old!`
//     return stmt
// }
// console.log(Person('Francis','Njuguna',22))

const Person = (fName,lName,Age) =>{
    const print = {
        fName:fName,
        lName:lName,
        Age:Age,
        assets:10000000,
        liabilities:30000,
        networth: function () {
            return this.assets - this.liabilities
        }
    }

    const stmt =`Hi, my name is ${print.fName} ${print.lName},I am ${print.Age} years old! 
    and my net worth is $${print.networth()} USD`
    return stmt
}
//console.log(Person('Francis','Njuguna',22))

//LOOPS

//for loops
const fruits =["apple","orange","apple","orange","apple","orange","apple","orange",]
// for (let i=0; i<fruits.length; i++) {
//     console.log(fruits[i])
// }

for (const fruit of fruits) {
    //console.log(fruit)
}

const numbers = [1,2,3,4,5,6]

// for(const number of numbers) {
//     console.log(number)
// }
const square = (numbers) =>{
    let result = []
    for(const number of numbers) {
    result.push(number**2)
}
return result
}

//console.log(square([2,3,4,5,6,7]))

//const countLetters = (phrase) => {
    //let phrase1 = "hey I am perfecting my javascript skills"


    // let result = 0;
    // for ( const index in phrase) {

    //     //console.log(Number(index) + 1)
    //     result = iNumber(index) + 1
    // }
    //return { result }
    //return { result.length }
//}
//const phrase = prompt("write your phrase")
//console.log(countLetters(phrase))
//document.getElementById("demo").innerHTML = length;

const sumArray = (numbers) => {
    let result =0;

    for (const numer of numbers) {
        result = result + number
    }
    return {result}
}
const nums = [1,2,3,4,5]
//console.log(sumArray(nums))

const max = (numbers) => {
    let result = numbers[0]

    for (const number of numbers) {
        if (number > result) {
            result = number
        }
    }
    return  result 
}
//console.log(max([1,2,333,4,5]))

//calculate frequency

const letterFrequency = (phrase) => {
    console.log(phrase)
//make frequency object
    let frequency = {}
    for (const letter of phrase) {

        //check if letter exists in frequency
        if (letter in frequency) {
            //increment the value by 1

            frequency[letter]++
            //otherwise set the value to 1
        }else {
            frequency[letter] = 1
        }
    }
    return frequency
}

//console.log(letterFrequency("helooo thereee!!"))

// const wordFrequency = (phrase) => {
//     let frequency = {}
//     words = phrase.split(' ')
//     for (const word of words) {
//         console.log(word)
//         if (word in frequency) {
//             frequency[word]++
//         }else {
//             frequency[word] =1
//         }
    
//     }
//     console.log(words)
//     return frequency
// }
// console.log(wordFrequency("lolo wow wow wow he hehe hehe"))


//alternatively
const wordFrequency = (phrase) => {
    const words = phrase.split(' ')   
    return letterFrequency
}
//const userinput = prompt("write your sentence")
//console.log(wordFrequency("lolo wow wow wow he hehe hehe"))

//CHAPTER 8:ARRAY METHODS
/*
-higher order functions
map()-loops and return exact thing of an array
filter()
reduce()
*/
// const [1,2,3,4,5].map(number => {
//     console.log(number)
//     console.log("njuguna")
// })

// let result = [1,2,3,4].map(number => number * 2)
// console.log(result)

const doubleMap = (numbers) => { 
    return numbers.map(number => number *2)  
}
//console.log(doubleMap([1,2,3]))


//.filter-loops and returns an aray withn matching conditions
const numss = [1,2,3,4,5,6]
console.log(numss.filter(num => num > 4))

//document.getElementById("demo").innerHTML = length;
 
// const person =[
// {firstname:"Francis",lastname:"njuguna" ,age:22}
// ]
// console.log(person())

const actors = [
    {name:'johnny', networth:200000},
    {name:'leon', networth:1000},
    {name:'philips', networth:100000},
]
console.log(actors.reduce((p,c) => p+c.networth,0))
// let result = actors.filter(actor => actor.networth>20000)
// console.log(result)
// let names = result.map(actor => actor.name).join(', ')


// // document.getElementById("demo").innerHTML= `<h1>${JSON.stringify(result)}</h1>`
// document.getElementById("demo").innerHTML= `<h1>${names}</h1>`

/*
REDUCE
sum all
takes in a function as an argument
reduce loops and gives you back the accumulator
*/
function multiply(a, b) {
    return a * b
}

const numz = [1,2,3,4]
const reslt = numz.reduce((a,b) => a* b)
//.reduce(multiply)
console.log(reslt)

//DOM manipulation
//document object model