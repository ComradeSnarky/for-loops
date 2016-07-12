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
