class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    if (pet === undefined) {
      this.pet = 'bat';
    } else {
      this.pet = pet;

    }
    this.thirsty = thirsty;

    }
    drink()  {
      if (this.thirsty === !true) {
        return true;
      } else {
        return false;
      }

    }
  }
module.exports = Vampire;
// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass
