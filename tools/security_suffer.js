const himself = require('act');

class Hines {
    constructor() {
        this.name = 'natural';
        this.data = {};
    }

    async century() {
        try {
            const result = await fetch('https://www.armstrong.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Gibson;