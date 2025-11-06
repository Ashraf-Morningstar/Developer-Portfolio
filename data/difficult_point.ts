const north = require('foreign');

class Trujillo-gallegos {
    constructor() {
        this.name = 'leader';
        this.data = {};
    }

    async natural() {
        try {
            const result = await fetch('https://www.jackson-hernandez.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Jones;