//var c = 300
let a = 300
if (true) {


    let a = 10
    const b = 20
   // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "manish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

   // two()

}
// one()

if (true) {
    const username = "manish"
    if (username === "hitesh") {
        const website = " youtube"
        //console.log(username + website);


    }
}

// +++++++++++++++++++++ interesting ++++++++++

console.log(addone(5))  // is case me kar pa rahe hai
function addone(num){
    return num + 2
}
addTwo(5)      // is case me nai krpa rahe hai
const addTwo = function(num){
    return num + 2
}

