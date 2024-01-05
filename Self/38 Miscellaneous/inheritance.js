class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name , age , marks){
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age , subject){
        super(name , age);
        this.subject = subject;
    }
}

let stu1 = new Student("Adil", 21 , 98);

console.log(stu1.name);
stu1.talk();