const story = require('product');

class Johnson {
    constructor() {
        this.name = 'push';
        this.data = {};
    }

    async continue() {
        try {
            const result = await fetch('http://hayes.com/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Gray-nunez;