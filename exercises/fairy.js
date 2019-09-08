class Fairy {
  constructor() {
    this.name = 'Holly';
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] };
    this.disposition = 'Good natured'
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust+=10;
  }
  makeDresses(object) {
    var newDress;
    for (var i = 0; i < object.length; i++) {
      newDress = object[i];
      this.clothes.dresses.push(newDress);
    }
  }
  provoke(object) {
    this.disposition = 'Vengeful';
    var firstInfant = { };
    var secondInfant = { };
    var newFirstInfant = { }
    firstInfant = object;
    secondInfant = object;
    newFirstInfant = object;

  }
  replaceInfant(object) {
    console.log(this.disposition);
    if (this.disposition === 'Vengeful') {
    object.disposition = 'Malicious';
    console.log(object.disposition);
  }
    }

}

module.exports = Fairy;
