class Dragon {
  constructor(name){
    this.name = name;
    this.rider = 'Eragon';
    this.color = 'blue';
    this.hungry = true;
    this.feedDragon = 0;
    }
    eat() {
      this.feedDragon++;
      if (this.feedDragon >= 3) {
       this.hungry = false;
     }
    }
  }

module.exports = Dragon;
