class Medusa {
  constructor(name, statues) {
    this.name = name;
    this.statues = [];
    this.stoned = false;

      }
    stare(victim) {
      if (this.statues.length < 3) {
        this.statues.push(victim);
      } else {
        this.stoned = false;

      }
    }

}



module.exports = Medusa;
