const possible = require('far');

class Johnson {
    constructor() {
        this.name = 'maybe';
        this.data = {};
    }

    async result() {
        try {
            const result = await fetch('http://johnson.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Chen-contreras;