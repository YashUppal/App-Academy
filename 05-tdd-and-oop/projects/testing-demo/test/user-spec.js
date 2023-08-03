const { expect } = require('chai');
const User = require('../class/user.js');

describe('User Class',function() {

    let user;

    beforeEach(() => {
        user = new User("john_doe");
    })

    it('should create successfully',function() {
        expect(user).to.exist;
    })

    it('should have a username upon creation',function() {
        expect(user.username).to.equal("john_doe");
    })
})
