const MAXIMUM_FITNESS = 10;
function Pet(name) {
    this.name = name;
    this.age = 2;
    this.fitness = 10;
    this.hunger = 0;
  }

  Pet.prototype.growUp = function() {
    this.age += 1;
    this.fitness -= 3;
    this.hunger += 5;
  }

  Pet.prototype.walk = function() {
    this.fitness += 4;
  }

  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  }
module.exports = Pet;