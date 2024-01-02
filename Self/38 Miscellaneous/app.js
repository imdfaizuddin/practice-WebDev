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