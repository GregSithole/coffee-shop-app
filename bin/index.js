#!/usr/bin/env node

const program = require('commander');
const list = require('../lib/list');

program.command('list')
    .alias('ls')
    .description('List coffee menu')
    .action( () => {
        list();
    });

program.parse(process.argv);
