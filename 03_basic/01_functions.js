// functions 

function sayMyName(){
    console.log("M");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2   // direct 

}
const result = addTwoNumbers(3, 5)

// console.log("result: ", result);

function loginUserMessage(username){
    if(username === undefined){        // if(!username)  are same
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
}

// console.log(loginUserMessage("manish"))
console.log(loginUserMessage("manish"))




function calculatecartprice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
const user = {
    username: "manish",
    price: 199

}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



