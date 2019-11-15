#!/usr/bin/env node

const program = require('commander');

const order = require('../lib/order');
const list = require('../lib/list');

program.command('list')
    .alias('ls')
    .description('List coffee menu')
    .action( () => {
        list();
    });

program.command('order <type>')
    .alias('o')
    .description('Order a coffee')
    .action(() => {
        order();
    });

program.parse(process.argv);
