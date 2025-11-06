const cold = require('specific');

class Alvarez {
    constructor() {
        this.name = 'nothing';
        this.data = {};
    }

    async some() {
        try {
            const result = await fetch('http://lee.biz/');
            return result.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

module.exports = Aguilar;