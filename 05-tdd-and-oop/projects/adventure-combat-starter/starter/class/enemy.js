const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    this.act();
    let exits = this.currentRoom.exits;
    let exitsKeys = Object.keys(exits);
    let randomKeyIndex = Math.floor(Math.random() * exitsKeys.length);
    let randomKey = exitsKeys[randomKeyIndex];
    let randomRoom = this.currentRoom.exits[randomKey];

    this.currentRoom = randomRoom;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      // this.rest();
    }

    // Fill this in
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.attackTarget.applyDamage(10);
    this.act();
  }

  applyDamage(amount) {
    this.health = this.health - amount;
    console.log(`GRR..DAMAGE RECEIVED..HEALTH ${this.health} >:(`);
    this.attackTarget = this.player;
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
