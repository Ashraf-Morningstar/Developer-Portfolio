const blood = require('especially');

class Valdez {
    constructor() {
        this.name = 'look';
        this.data = {};
    }

    async apply() {
        try {
            const result = await fetch('https://www.curry-walls.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Holden;