class Direwolf {
  constructor (name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark1) {
    if (this.home === stark1.location) {
      this.starksToProtect.push(stark1);
      stark1.safe = true;
      this.huntsWhiteWalkers = false;
    } if (this.starksToProtect.length === 3){
      this.starksToProtect.pop();
    }
  }
  leave(stark1) {
    stark1.safe = false;
    var index = this.starksToProtect.indexOf(stark1);
    this.starksToProtect.splice(index, 1);
  }
}
module.exports = Direwolf;
