class Wizard {
  constructor (obj) {

    this.name = obj.name;
    // this.bearded = obj.bearded === undefined;
    this.bearded = true
    if (obj.bearded !== undefined) {
      this.bearded = obj.bearded;
    }
      // this.bearded = this.bearded === undefined;
    this.isRested = true;
    this.castCount = 0;

  }
  incantation(phrase) {
     this.castCount++;
     if (this.castCount > 2) {
       this.isRested = false;
     }
     return phrase.toUpperCase();
  }

  cast() {
    if (this.castCount < 2){
      return 'MAGIC BULLET'
    } else  {
      return 'I SHALL NOT CAST!'
    }

  }

}

module.exports = Wizard;
