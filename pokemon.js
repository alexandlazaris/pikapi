class Pokemon {
  constructor(name, type = [], stats = [], sprites = []) {
    this.name = name;
    this.type = type;
    this.stats = stats;
    this.sprites = sprites;
  }

  getName() {
    return this.name;
  }
}

module.exports = Pokemon;
