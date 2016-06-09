#!/usr/bin/env node

var argv = require('yargs')
  .usage('$0 [args]')
  .option('hue', {
    alias: 'h',
    describe: 'Hue – Controls the hue of the generated color. You can pass a string representing a color name: red, orange, yellow, green, blue, purple, pink and monochrome are currently supported.'
  })
  .option('luminosity', {
    alias: 'l',
    describe: 'Controls the luminosity of the generated color. You can specify a string containing bright, light or dark.'
  })
  .option('count', {
    alias: 'c',
    describe: 'An integer which specifies the number of colors to generate.'
  })
  .option('seed', {
    alias: 's',
    describe: 'An integer or string which when passed will cause randomColor to return the same color each time.'
  })
  .option('format', {
    alias: 'f',
    describe: 'A string which specifies the format of the generated color. Possible values are rgb, rgbArray, hsl, hslArray and hex (default).'
  })
  .help('help')
  .argv;

var randomColor = require('randomcolor');

console.log(randomColor(argv));
