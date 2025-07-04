class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log('USERNAME is ${this.username}');

    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log('A new course was added by ${this.username}');
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logme()
const masalaChai = new User("masalaChai")

masalaChai.logme()
console.log(chai instanceof User);