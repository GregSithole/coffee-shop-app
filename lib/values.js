// Types of Coffees
exports.types = [
    {
        name: 'Espresso',
        price: 'R25.99'
    },
    {
        name: 'Latte',
        price: 'R24.50'
    },
    {
        name: 'Cappuccino',
        price: 'R23.99'
    },
    {
        name: 'Americano',
        price: 'R22.50'
    },
    {
        name: 'Macchiato',
        price: 'R23.50'
    },
];

exports.typesPlain = exports.types.map(function(o) {
    return o.name + ' (' + o.price + ')';
});

// Amount of Sugar
exports.sugar = [
    {
        name: 'Low',
        spoons: '1'
    },
    {
        name: 'Medium',
        spoons: '2'
    },
    {
        name: 'High',
        spoons: '3'
    },
    {
        name: 'Very High',
        spoons: '4'
    },
];

exports.sugarPlain = exports.sugar.map(function(o) {
    return o.name + ' (' + o.spoons + ' spoons)';
});

// Serving Options
exports.servedIn = [
    'Mug',
    'Cup',
    'Takeaway package'
];
