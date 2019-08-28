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
    return 'MAGIC BULLET'
  }
}

module.exports = Wizard;
