class Werewolf {
  constructor(name) {
    this.name = name;
    this.location = 'Basement lair';
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.victim = false;
  }
  change() {
    if (this.human === true && this.wolf === false) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else if (this.human === false && this.wolf === true) {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }

  }
  eat() {
    if (this.hungry === true && this.human === false) {
      this.victim = true;
      this.human = true;
    } else {
      this.victim = false;
    }
  }


}
module.exports = Werewolf;
