const I = require('analysis');

class Tanner {
    constructor() {
        this.name = 'girl';
        this.data = {};
    }

    async claim() {
        try {
            const result = await fetch('https://www.smith.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Williams;