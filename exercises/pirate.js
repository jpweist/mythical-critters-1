class Pirate {
  constructor (name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    
  }
    commitHeinousAct() {
      var heniousActCount = 0;
       heniousActCount++;
      if (heniousActCount >= 3) {
        this.cursed = true;
      }
    }

}

module.exports = Pirate;
