import requireHacker from 'require-hacker';

requireHacker.hook('css', () => 'module.exports = ""');
requireHacker.hook('scss', () => 'module.exports = ""');

// Prevents mocha from compiling classes.
