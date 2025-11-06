const light = require('because');

class Horn-cox {
    constructor() {
        this.name = 'natural';
        this.data = {};
    }

    async back() {
        try {
            const result = await fetch('https://vazquez-gomez.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Wilson;