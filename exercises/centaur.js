class Centaur {
  constructor (name) {
    this.name = name;
    this.breed = 'Palomino';
    this.cranky = false;
    this.standing = true;
    this.runShoot = 0;
    this.layingDown = false;
  }
  shoot() {
    if (this.standing === true && this.layingDown === false && this.runShoot < 3) {
        this.runShoot++;
        return 'Twang!!!';
      } else {
        this.cranky = true;
        return 'NO!';
    }
  }
  run() {
    if (this.standing === true && this.layingDown === false && this.runShoot < 3) {
        this.runShoot++;
        return 'Clop clop clop clop!!!';
      } else {
        this.cranky = true;
        return 'NO!';
    }
  }

  sleep() {
    return 'NO!';
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
}

module.exports = Centaur;
