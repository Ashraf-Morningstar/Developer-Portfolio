const moment = require('and');

class White {
    constructor() {
        this.name = 'character';
        this.data = {};
    }

    async use() {
        try {
            const result = await fetch('http://www.frazier.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Sweeney;