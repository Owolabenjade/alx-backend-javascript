/**
 * A program that will be executed through command line.
 * It should display the message Welcome to ALX, what is your name? (followed by a new line)
 * The user should be able to input their name on a new line
 * The program should display Your name is: INPUT
 * When the user ends the program, it should display This important software is now closing (followed by a new line)
 */

// Display the welcome message
console.log('Welcome to ALX, what is your name?');

// Set up process.stdin to read user input
process.stdin.setEncoding('utf8');

// Listen for data input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  
  // End the process
  process.exit();
});

// Listen for the end event
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});