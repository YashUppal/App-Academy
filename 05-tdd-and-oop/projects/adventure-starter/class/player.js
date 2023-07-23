const {Food} = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
        let pickedItem = this.currentRoom.getItemByName(itemName);
        this.items.push(pickedItem);
    }

    dropItem(itemName) {
        let heldItem = this.getItemByName(itemName);
        this.currentRoom.items.push(heldItem);

        this._removeItem(itemName);
    }

    eatItem(itemName) {
        let itemToEat = this.getItemByName(itemName);
        if(itemToEat instanceof Food) {
            console.log(`${itemName} consumed.`);
            this._removeItem(itemName);
        } else {
            console.log("This is not food!");
        }

    }

    getItemByName(name) {
        return this.items.filter((item) => {
            if(item.name === name) {
                return item;
            }
        })[0];
    }

    _removeItem(itemName) {
        let itemIndex;

        this.items.forEach((item,index) => {
            if(item.name === itemName) {
                itemIndex = index;
                return;
            }
        })

        this.items = [...this.items.slice(0,itemIndex), ...this.items.slice(itemIndex+1,this.items.length)];
    }
}

module.exports = {
  Player,
};
