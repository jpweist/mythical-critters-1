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
    // if (this.human === true && this.wolf === false) {
    //     this.human = false;
    //     this.wolf = true;
    //     this.hungry = true;
    // } else if (this.human === false && this.wolf === true) {
    //     this.human = true;
    //     this.wolf = false;
    //     this.hungry = false;
    // }
    this.wolf = !this.wolf;
    this.human = !this.human;
    this.hungry = !this.hungry;
}

  eat(person) {
    if (this.hungry === true && this.human === false) {
      person.alive = false;
      this.hungry = false;
      this.victim = true;
      this.human = true;
    }
    // else {
    //   this.victim = false;
    // }
  }




}
module.exports = Werewolf;
