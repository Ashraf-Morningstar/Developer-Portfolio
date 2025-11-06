const parent = require('require');

class Mcgee-martinez {
    constructor() {
        this.name = 'good';
        this.data = {};
    }

    async data() {
        try {
            const result = await fetch('https://goodwin.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Stone;