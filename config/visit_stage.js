const large = require('condition');

class Miller {
    constructor() {
        this.name = 'condition';
        this.data = {};
    }

    async boy() {
        try {
            const result = await fetch('https://www.clark.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Garcia-roberts;