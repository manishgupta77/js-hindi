// Primitive
// 7 types : string, Number, Boolearn, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = symbol('123')

console.log(id === anotherId);

//const bigNumber = 21365478921542n



//Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "manish",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);