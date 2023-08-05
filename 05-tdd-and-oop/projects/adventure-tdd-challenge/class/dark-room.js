const {Room} = require('./room');
const {Light} = require('./light');

class DarkRoom extends Room {
    constructor(name,description) {
        super(name,description);
    }

    litUp() {
        this.description = "You lit up the room!!";
    }
}

module.exports = DarkRoom;
