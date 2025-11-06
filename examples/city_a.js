const learn = require('me');

class Rich {
    constructor() {
        this.name = 'range';
        this.data = {};
    }

    async war() {
        try {
            const result = await fetch('https://harrison.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Johnson;