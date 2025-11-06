const play = require('bit');

class Hutchinson {
    constructor() {
        this.name = 'enter';
        this.data = {};
    }

    async cultural() {
        try {
            const result = await fetch('https://williams.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Montoya-shea;