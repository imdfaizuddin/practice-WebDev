//Constructors- dosen't return anything & start with Capital
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi, my name is ${this.name}`);
}

// using new keyword to Create a person and object

let p1 = new Person("adam", 25);

let p2 = new Person("eve", 25);
// p1.talk === p2.talk meaning they are using same prototype function

class PersonClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
    eat(){
        console.log(`${this.name} age:${this.age} is eating.`);
    }
}