// Part 1: Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for(i=0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log ("fizz buzz")
    }
    else if (i % 3 == 0) {
        console.log ("fizz")
    }
    else if (i % 5 == 0) {
        console.log ("buzz")
    }
    else 
        console.log (i)
}

// Part 2: Prime Time
// instructions
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

//How is works
/*Declare an arbitrary number n
Start checking from the next number after n
Assume nextnum is prime until proven otherwise
Loop from 2 up to the square root of nextnum
nextnum is not prime if divisible by i
Exit the loop early if a divisor is found
If isPrime is still true, then nextnum is a prime number
Exit the loop after finding the prime
Increment nextnum and try again if it's not prime*/

let n = 3;
let nextnum = n + 1;

while (true) {
  let isPrime = true; 
  
  for (let i = 2; i <= Math.sqrt(nextnum); i++) {
    if (nextnum % i === 0) {
      isPrime = false; 
      break; 
    }
  }
  
  if (isPrime) {
    console.log(nextnum);
    break; 
  }
  
  nextnum++;
}

// Part 3: Feeling Loopy
// instructions
/*Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);*/

// CSVFlData as a string
let csvJobData = 
`ID,Name,Occupation,Age\n
42,Bruce,Knight,41\n
57,Bob,Fry Cook,19\n
63,Blaine,Quiz Master,58\n
98,Bill,Doctor’s Assistant,26`;

// Splits the CSV data into rows at the newline character. This creates an array of rows
// ["ID,Name,Occupation,Age", "42,Bruce,Knight,41", "57,Bob,Fry Cook,19", "63,Blaine,Quiz Master,58", "98,Bill,Doctor’s Assistant,26"]
let rows = csvJobData.split("\n");

// Loop through each row in the array
for (let i = 0; i < rows.length; i++) {
  let row = rows[i]; 

// Splits the row into cells at the comma. This creates an array of cells
// ["ID", "Name", "Occupation", "Age"]
let cells = row.split(",");

// Log the first four cells. This will log the ID, Name, Occupation, and Age
console.log(cells[0], cells[1], cells[2], cells[3]);
}

