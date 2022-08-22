function Engineer(name = "") {
  this.name = name;

  this.id = Math.floor(Math.random() * 5 + 7);
}

module.exports = Engineer;
