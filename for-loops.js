// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() 
// to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

for (var i = 5; i <= 120; i += 10) {
  console.log(i);
}

// Write a for loop with a counter variable initialized at 4096. 
// Each time the loop executes divide the counter variable's value by 2.
// Use console.log() to output its value every time. When the counter variable's value is 1, 
// stop execution.
// 
for (var i = 4096; i >= 1; i /= 2) {
  console.log(i)
}

// Create an array that contains the names of American Presidents. 
// Loop over that array with a for loop, and use string concatenation with console.log() 
// to output the order and name of each President (see example below).

var presidents = 
["George Washington",
  "John Adams",
  "Thomas Jefferson", 
  "James Madison", 
  "James Monroe", 
  "John Quincy Adams", 
  "Andrew Jackson", 
  "Martin Van Buren", 
  "William Henry Harrison", 
  "John Tyler", 
  "James K. Polk",
  "Zachary Taylor",
  "Millard Fillmore", 
  "Franklin Pierce", 
  "James Buchanan", 
  "Abraham Lincoln", 
  "Andrew Johnson", 
  "Ulysses S. Grant", 
  "Rutherford B. Hayes",
  "James A. Garfield", 
  "Chester Arthur", 
  "Grover Cleveland", 
  "Benjamin Harrison", 
  "Grover Cleveland", 
  "William McKinley", 
  "Theodore Roosevelt", 
  "William Howard Taft", 
  "Woodrow Wilson", 
  "Warren G. Harding", 
  "Calvin Coolidge", 
  "Herbert Hoover", 
  "Franklin D. Roosevelt", 
  "Harry S. Truman", 
  "Dwight D. Eisenhower", 
  "John F. Kennedy", 
  "Lyndon B. Johnson",
  "Richard Nixon",
  "Gerald Ford", 
  "Jimmy Carter", 
  "Ronald Reagan", 
  "George Bush", 
  "Bill Clinton", 
  "George W. Bush", 
  "Barack Obama"];

for (var i = 0; i <= presidents.length; i++) {
  console.log(presidents[i], "was president #", i + 1)
} 

// not sure how to get i to not count up to 45


// Use can use another kind of for loop to iterate over objects. 
// Iterate over the object below and use console.log() 
// to output the names of the keys in the object.



var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var anyVar in antSpecies) {
  console.log(anyVar);
} 


// Create a stackLetters function that should console.log rows of letters. 
// It should take an array containing the letters of the alphabet and output them like this:
//a
//ab
//abc
//abcd
//abcde
//abcdef
//Then add logic to stackLetters that places a space after every fifth letter, like this:
// a
// ab
// abd
// abcd
// abcde
// abcde f

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stackLetters() {
  var abcs = ' ';
  var counter = 1;
  for (var i = 0; i <= alphabet.length; i++) {
    abcs += alphabet[i];
    if (counter === 5) {
      abcs += ' ';
      counter = 0;
    }
    counter++;
    console.log(abcs);
  }
}
stackLetters();





























