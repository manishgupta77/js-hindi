// let myName = "manish"
// let mychannel = "chai"

// console.log(myName.trueLength);


let myheros = ["thor", "spiderman"]

let heropower = {
   
}

Object.prototype.manish = function(){
    console.log('manish is present in all object');
}

Array.prototype.heyManish = function(){
    console.log('manish says hello');
}

// heroPower.Mansih()
// myheros.manish()
// myheros.heyManish()
// heroPower.heyManish


// Inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "  

String.prototype.trueLength = function(){
    console.log('${this}');
    // console.log('${this.name}');
    console.log('True length is: ${this.trim().length}');

}

anotherUsername.trueLength()
"manish".trueLength()
"iceTea".truelength()
