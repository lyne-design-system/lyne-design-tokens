const StyleDictionary = require('style-dictionary')
  .extend(`${__dirname}/config.js`);
const fs = require('fs');
const _ = require('lodash');

console.log('Build started...');
console.log('\n==============================================');

StyleDictionary.registerFormat({
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/web-scss.template`)),
  name: 'custom/format/scss'
});

StyleDictionary.registerFormat({
  formatter: _.template(fs.readFileSync(`${__dirname}/templates/commonjs.template`)),
  name: 'custom/format/javascript/module'
});

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');
