// Part 3: Transforming Data
/* Instructions
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
*/


// This is a STRING of CSV tabular data. Each line is separated by a newline character (\n) while each cell is separated by a comma.
const csvJobData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Splits the CSV data into rowsEntries and cells
const rowsEntries = csvJobData .split('\n'); 
const twoDimensionalArray = []; 

/* Loops through each row in the rowsEntries array. Starts at index 0, which is the header row. Split each row into individual cells using the comma delimiter. 
Add each resulting array to the parent array.*/
for (let i = 0; i < rowsEntries.length; i++) {
  const row = rowsEntries[i].split(','); 
  twoDimensionalArray.push(row);  
}

/*Creates an empty array to store the lowercase version of the topHeaders. The topHeaders are the first row of the CSV data.
twoDimensionalArray[0][i]: Accesses the ith element (cell) of the first row (header row).
.toLowerCase(): Converts the cell value to lowercase.
headers.push(): Adds the lowercase value to the headers array.*/
const topHeaders = [];
for (let i = 0; i < twoDimensionalArray[0].length; i++) {
  topHeaders.push(twoDimensionalArray[0][i].toLowerCase()); 
}

// stores the transformed data
const convertedData = []; 

/*Loops through each row in the twoDimensionalArray starting from index 1 (skipping the header row). Nested loop iterates through each cell in the row.
Creates an object where the key is the lowercase version of the topHeaders and the value is the cell value.*/
for (let i = 1; i < twoDimensionalArray.length; i++) { 
  const row = twoDimensionalArray[i]; 
  const rowObject = {}; 

/*Iterates through each cell in the row. Assigns the cell value to the corresponding key in the rowObject.
topHeaders[j]: Accesses the jth element of the topHeaders array, which corresponds to the lowercase key.
{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }*/

  for (let j = 0; j < row.length; j++) { 
    rowObject[topHeaders[j]] = row[j]; 
  }
// An array used to store all the transformed row objects. Adds the rowObject to the convertedData array with each push.
  convertedData.push(rowObject); 
}

// Store the convertedData array for later use
const cachedconvertedData = convertedData;

// Output the convertedData array. This will display the data as objects with lowercase keys
console.log('CSV Job Data Set:', cachedconvertedData);
