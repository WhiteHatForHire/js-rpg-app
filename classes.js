class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  };

  speak() {
    console.log(`${this.name} makes a noise at ${this.height} ft tall!`);
  }
};

class Lion extends Animal {
  constructor(name, height) {
    super(name, height);
    this.species = 'Lion';
  }

  speak() {
    console.log(`${this.name} roars`);
  }
}

const animal = new Animal(`Gregor`, 5);
const fuzzy = new Lion('Fuzzy', 4);

animal.speak();
fuzzy.speak();