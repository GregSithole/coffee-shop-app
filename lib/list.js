const colors = require('colors');
const { types } = require('./values');

module.exports = function() {
    console.log('COFFEE MENU');
    console.log('------------------');

    types.forEach((type) => {
        console.log(`${colors.bold(type.name)}\t\t${colors.grey(type.price)}`);
    });
};

