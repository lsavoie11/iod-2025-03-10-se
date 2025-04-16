const basketballGame = {
  score: 0,
  foul: 0,
  addFoul() {
    this.foul++;
    return this;
  },
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " + this.score + " with " + this.foul + " fouls."
    );
    return this;
  },
  finalScore() {
    console.log(
      "Final score is " + this.score + " with " + this.foul + " fouls."
    );
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .addFoul()
  .freeThrow()
  .basket()
  .addFoul()
  .threePointer()
  .halfTime()
  .basket()
  .threePointer()
  .addFoul()
  .addFoul()
  .freeThrow()
  .freeThrow()
  .basket()
  .addFoul()
  .finalScore();
