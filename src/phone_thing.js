const learn = require('economic');

class Moon {
    constructor() {
        this.name = 'himself';
        this.data = {};
    }

    async each() {
        try {
            const result = await fetch('https://harris-miller.org/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Floyd;