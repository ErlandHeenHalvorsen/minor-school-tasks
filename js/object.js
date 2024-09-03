function dog(Name, Age, Color) {
  this.name = Name;
  this.age = Age;
  this.color = Color;
}

const dog1 = new dog("Troll", 13, "Brown");

dog.prototype.toString = function dogToString() {
  return `${this.name} is ${this.age} years old and he is ${this.color}`;
};
//console.log(`${dog1}`);

class Doggo {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    getDoggo() {
        return `${this.name} is ${this.age} years old and he is ${this.color}`
    }
}

const dog2 = new Doggo("Suzie", 2, "black and white");
//console.log(dog2.getDoggo());
