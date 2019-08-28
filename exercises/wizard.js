class Wizard {
  constructor (obj) {

    this.name = obj.name;
    this.bearded = obj.bearded;
    this.bearded = this.bearded === undefined;

  }

}

module.exports = Wizard;
