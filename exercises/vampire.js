class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }
  drink() {
    this.thirsty = false;
  }

}

module.exports= Vampire;































// class Vampire {
//   constructor(name, pet) {
//     this.name = name;
//     if (pet === undefined) {
//       this.pet = 'bat';
//     } else {
//       this.pet = pet;
//
//     }
//     this.thirsty = true;
//
//     }
//     drink()  {
//       this.thirsty = false;
//     }
// }
//
// module.exports = Vampire;
// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass
// .only run one test
