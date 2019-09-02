
class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    if (this.color === undefined) {
      this.color = 'white'
    }
  }
  isWhite() {
    return false;
  }
  says(saying) {
    return `**;* ${saying} *;**`;
  }

}

module.exports = Unicorn;

// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass
// constructor( name, color = "white")
// this.color = color || "white"
// bang operators and truthy statments
