class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return '${this._password}manish'
    }

    set password(value){
        this._password = value
    }
}

const manish = new User("m@manish.ai", "abc")
console.log(manish.email);