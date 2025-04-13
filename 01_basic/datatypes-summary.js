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

//+++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), heap (Non-primitive)

let myYoutubename = "manishgupta"
let anothername = myYoutubename
anothername = "manishwithcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "manish@google.com"

console.log(userOne.email);
console.log(userTwo.email);


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