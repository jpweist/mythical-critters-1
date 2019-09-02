class Person {
  constructor(name) {
    this.name = name;
    this.stoned = false;
  }
  stare(victim) {
    this.stoned = true;
  }
}
module.exports = Person;
