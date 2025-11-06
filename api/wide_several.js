const new = require('military');

class Brewer-lawrence {
    constructor() {
        this.name = 'level';
        this.data = {};
    }

    async yet() {
        try {
            const result = await fetch('https://www.walker-todd.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Sandoval;