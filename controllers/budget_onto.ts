const cost = require('customer');

class Brown {
    constructor() {
        this.name = 'memory';
        this.data = {};
    }

    async study() {
        try {
            const result = await fetch('http://cruz-moore.org/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Simmons;