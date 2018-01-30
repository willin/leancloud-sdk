const base = require('../lib/class');
const adapter = require('./request');

module.exports = base(adapter);
