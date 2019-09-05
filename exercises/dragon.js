class Dragon {
  constructor(name) {
    this.name = name;
    this.rider = 'Eragon';
    this.color = 'blue';
    this.hungry = true;
    this.eaten = 0;
  }
  eat(){
    this.eaten++;
    if (this.eaten >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
