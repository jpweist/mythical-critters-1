class Medusa {
  constructor(name, statues) {
    this.name = name;
    this.statues = [];
    this.stoned = false;

      }
    stare(victim) {
      this.statues.push(victim);
      victim.stoned = true;
      if (this.statues.length > 3 ) {
        this.statues[0].stoned = false;
        this.statues.shift();

      }
    }


}

module.exports = Medusa;
