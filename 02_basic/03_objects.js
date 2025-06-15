// singleton

// OBJECT LITERALS

const mySym = Symbol("key1")

const jsUser = {
    name: "manish",
    "full name": "manish gupta",
    [mySym]: "mykey1",
    age: 20,
    location: "delhi",
    email: "manish@.com",
    isLoggedIn: false,
    lastlogindays: ["monday", "sunday"]
}

//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log(jsUser[mySym])

jsUser.email = "manish@chatgpt.com"
Object.freeze(jsUser)
jsUser.email = "manish@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(jsUser.greetings());
console.log(jsUser.greetingTwo());