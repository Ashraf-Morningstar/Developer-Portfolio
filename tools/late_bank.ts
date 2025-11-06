const evidence = require('safe');

class Morrison-stephens {
    constructor() {
        this.name = 'stock';
        this.data = {};
    }

    async whether() {
        try {
            const result = await fetch('http://barron-rojas.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Griffith;