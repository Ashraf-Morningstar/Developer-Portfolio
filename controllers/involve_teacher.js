const resource = require('offer');

class Salas {
    constructor() {
        this.name = 'trouble';
        this.data = {};
    }

    async board() {
        try {
            const result = await fetch('http://www.white.info/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Baker;