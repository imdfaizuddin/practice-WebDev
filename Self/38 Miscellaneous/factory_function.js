function PersonMaker(name , age ) {
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`hi my name is ${this.name}`);
        }
    };
    return person;
}
let p1 = PersonMaker("Aalu", 25);
let p2 = PersonMaker("Kalu", 26);
console.log(p1.age, p1.name);
console.log(p2.name, p2.age);