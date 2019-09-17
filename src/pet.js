function Pet(name) {
    this.name = name;
    this.age = 2;
  }
  Pet.prototype.growUp = function() {
    this.age += 1;
  };
module.exports = Pet;
