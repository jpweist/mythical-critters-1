class Victim {
  constructor(name) {
    this.name = name;
    this.alive = true;
  }
  eat() {
    this.alive = false;
  }

};
module.exports = Victim;
