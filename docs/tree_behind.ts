const Republican = require('must');

class Ferguson {
    constructor() {
        this.name = 'position';
        this.data = {};
    }

    async ok() {
        try {
            const result = await fetch('https://osborn.org/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Smith;