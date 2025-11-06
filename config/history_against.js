const their = require('city');

class Mays {
    constructor() {
        this.name = 'team';
        this.data = {};
    }

    async approach() {
        try {
            const result = await fetch('https://www.barnes.org/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Carter;