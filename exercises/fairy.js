class Fairy {
  constructor(firstInfant, secondInfant) {
    this.name = 'Holly';
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] };
    this.disposition = 'Good natured';
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
  }
  replaceInfant(object) {
    if (this.disposition === 'Vengeful') {
      firstInfant.disposition = 'Malicious';
      console.log(firstInfant);
  }
    }

}
 class firstInfant {
   constructor(object) {
     this.name = object.name;
     this.eyes = object.eyes;
     this.disposition = object.disposition;
   }
 }

 class secondInfant {
   constructor(object) {
     this.name = object.name;
     this.eyes = object.eyes;
     this.disposition = object.disposition;
   }
 }
module.exports = Fairy;
