import chalk from 'chalk';
import validator from 'validator';
const error = chalk.bold.red;
const warning = chalk.blue.inverse('Hello'); // Orange color

// console.log(error('Error!'));
// console.log(warning);

const valid= chalk.bgBlue(validator.isEmail('foo@bar.com'));
console.log(valid);