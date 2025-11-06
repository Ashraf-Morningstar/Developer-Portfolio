const scene = require('until');

class Everett {
    constructor() {
        this.name = 'end';
        this.data = {};
    }

    async whole() {
        try {
            const result = await fetch('http://www.martinez.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Robertson;