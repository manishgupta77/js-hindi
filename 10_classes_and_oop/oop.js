// object literals works

const user = {
    username: "Manish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log('Username: ${this.username}');

        console.log(this);

    }
}




//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


// constructor work piche notes

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log('Welcome ${this.username}');
    }

    return this
}

const userOne = new User("manish", 15, true)
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne.Constructor);
//console.log(userTwo);