#!/usr/bin/env node
const fs = require('fs');

// :: What's This? :: ------------------------------------------------------------------------
// Simply copying the fresh Phaser 3 definitions into the project root. I couldn't find a way
// to reliably and easily import the definitions into the project through TypeScript configurations.
// Instead of wasting time on this, I feel this is a dependable approach at least until
// Phaser decides to include the definitions in the main package by default.
// -------------------------------------------------------------------------------------------
if (!fs.existsSync('typings')){
    fs.mkdirSync('typings');
}

fs.copyFile('node_modules/phaser3-docs/typescript/phaser.d.ts', 'typings/phaser.d.ts', (err) => {
    if (err) throw err;
    console.log('Phaser 3 Typings were copied into `typings` sub-directory');
});
