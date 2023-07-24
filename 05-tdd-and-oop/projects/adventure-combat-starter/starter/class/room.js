class Room {

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }

  getEnemies() {
    const { World } = require('./world');
    return World.getEnemiesInRoom(this);
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");
    if (this.getEnemies().length > 0) {
      console.log(`Enemies: ${this.getEnemies().map(enemy => enemy.name).join(", ")}`);
    }
    if (this.items.length > 0) {
      console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
    }
    console.log(this.getExitsString());
    console.log("");
  }

  getExits() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExits().join(", ")}`
  }

  connectRooms(direction, connectingRoom) {

    // Check if the direction and connecting room are valid
    if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
      throw new Error("Error: Invalid room connection");
    }

    this.exits[direction] = connectingRoom;
  }

  getRoomInDirection(direction) {
    return this.exits[direction];
  }

  getItemByName(name) {

    let retrievedItem;

    this.items.forEach((item) => {
      if(item.name === name) {
        retrievedItem = item;
      }
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

  getEnemyByName(name) {
    let enemyRetrieved;
    this.getEnemies().forEach((enemy) => {
      if(enemy.name === name) {
        enemyRetrieved = enemy;
        return;
      }
    })
    return enemyRetrieved;
  }
}

module.exports = {
  Room,
};
