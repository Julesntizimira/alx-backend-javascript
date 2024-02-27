/* Using Process stdin
*/
process.on('exit', (code) => {
  console.log('This important software is now closing');
});
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data}`);
});
