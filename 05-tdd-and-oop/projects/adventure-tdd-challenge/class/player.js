const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');
const DarkRoom = require('./dark-room');
const {Light} = require('../class/light');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    let tookItem = this.currentRoom.getItemByName(itemName);
    this.items.push(tookItem);

  }

  dropItem(itemName) {
    let itemToDrop = this.getItemByName(itemName);
    this.currentRoom.items.push(itemToDrop);

    if(this.currentRoom instanceof DarkRoom) {
      this.currentRoom.litUp();
    }

  }

  eatItem(itemName) {
    let retrievedItem = this.getItemByName(itemName);

    if(retrievedItem instanceof Food) {
      console.log(`${itemName} consumed!`);
    } else {
      console.log(`THIS IS NOT FOOD!`);
      this.items.push(retrievedItem);
    }

    this.health += 10;
  }

  getItemByName(name) {

    let retrievedItem;

    this.items.forEach((item) => {
      if(item.name === name) {
        retrievedItem = item;
      }
      return;
    })
    this._removeFromInventory(retrievedItem);
    return retrievedItem;
  }

  _removeFromInventory(toRemove) {
    let itemIndex;

    this.items.forEach((item,idx) => {
      if(toRemove.name === item.name) {
        itemIndex = idx;
        return;
      }
    })

    this.items = [...this.items.slice(0,itemIndex), ...this.items.slice(itemIndex+1,this.items.length)];
  }

  hit(name) {
    let enemy = this.currentRoom.getEnemyByName(name);
    enemy.applyDamage(this.strength);
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
