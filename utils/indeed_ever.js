const consumer = require('show');

class Thomas {
    constructor() {
        this.name = 'usually';
        this.data = {};
    }

    async break() {
        try {
            const result = await fetch('http://davidson.info/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Stout;