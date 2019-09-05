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
        console.log(this.runShoot);
        return 'Twang!!!';
      } if (this.runShoot === 3) {
        this.cranky = true;
        return 'NO!';
    }
  }
  run() {
    if (this.standing === true && this.layingDown === false && this.runShoot < 3) {
        this.runShoot++;
        console.log(this.runShoot);
        return 'Clop clop clop clop!!!';
      } if (this.runShoot === 3) {
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
