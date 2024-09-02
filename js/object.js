function dog(Name, Age, Color) {
  this.name = Name;
  this.age = Age;
  this.color = Color;
}

const dog1 = new dog("Troll", 13, "Brown");

dog.prototype.toString = function dogToString() {
  return `${this.name} is ${this.age} years old and he is ${this.color}`;
};
console.log(`${dog1}`);
