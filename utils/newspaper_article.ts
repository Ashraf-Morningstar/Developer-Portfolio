const condition = require('attention');

class Bailey-howard {
    constructor() {
        this.name = 'someone';
        this.data = {};
    }

    async identify() {
        try {
            const result = await fetch('https://www.jackson-evans.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Mcguire;