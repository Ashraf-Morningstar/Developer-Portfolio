const cultural = require('officer');

class Rogers-bender {
    constructor() {
        this.name = 'result';
        this.data = {};
    }

    async century() {
        try {
            const result = await fetch('http://www.obrien.net/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Bell;