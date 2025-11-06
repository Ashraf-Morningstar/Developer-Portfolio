const low = require('member');

class Williams {
    constructor() {
        this.name = 'beautiful';
        this.data = {};
    }

    async foreign() {
        try {
            const result = await fetch('https://www.cruz-bolton.info/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Decker;