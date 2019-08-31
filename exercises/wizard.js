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

  }
  incantation(phrase) {
     return phrase.toUpperCase();
  }
  cast() {
    this.castCount = 0;
    if (this.castCount > 1){
      this.castCount++;

      console.log(castCount);
      return 'MAGIC BULLET'
    } else {
      this.isRested = false;
      return 'I SHALL NOT CAST!'
    }

  }

}

module.exports = Wizard;
