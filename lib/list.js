const colors = require('colors');
const { types } = require('./values');

module.exports = function() {
    console.log('COFFEE MENU');
    console.log('------------------');

    types.forEach((type) => {
        console.log('%s %s', colors.bold(type.name), colors.grey('/ '+ type.price));
    });
};

