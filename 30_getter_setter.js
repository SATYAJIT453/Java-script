// why we use getter and setter in js
//ans : some time we dont want to share our password to any one thats why we use getter and setter in js and by the
// help of getter and setter we can change or modify the value and show the different password.....




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
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);