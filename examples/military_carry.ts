const resource = require('plant');

class Baker-phillips {
    constructor() {
        this.name = 'network';
        this.data = {};
    }

    async let() {
        try {
            const result = await fetch('https://www.lara-davis.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Bell-phillips;