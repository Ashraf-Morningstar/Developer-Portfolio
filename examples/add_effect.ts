const full = require('bar');

class Fox {
    constructor() {
        this.name = 'south';
        this.data = {};
    }

    async worry() {
        try {
            const result = await fetch('http://www.grimes-keller.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Olson-valencia;