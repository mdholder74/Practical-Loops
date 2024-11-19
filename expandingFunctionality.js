// Part 2: Expanding Functionality
/*Instructions
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
This should be calculated dynamically based on the first row of data.
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.*/

// This is a STRING of CSV tabular data. Each line is separated by a newline character (\n) while each cell is separated by a comma.
// The first line is the header row, while the next lines are the data rows.
const csvJobData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// The split() method is used to split a string into one array of substrings. Each portion of the string between (\n) becomes an element in the array.
/* Output: [
"ID,Name,Occupation,Age", 
"42,Bruce,Knight,41", 
"57,Bob,Fry Cook,19", 
"63,Blaine,Quiz Master,58", 
"98,Bill,Doctor's Assistant,26"]*/
const rowsEntries = csvJobData.split('\n'); 
console.log(rowsEntries);

/*rowsEntries[0] accesses the first element of the rowsEntries array, which is the header row: "ID,Name,Occupation,Age"
The split(',') method then splits this header row into individual columns using the comma delimiter.
The length property of the rowHeader array returns the number of elements/counts the columns).
This calculates the number of columns based on the header row, making the code adaptable to CSV files with any number of columns.
Output: ["ID", "Name", "Occupation", "Age"] Number of columns: 4*/
const rowHeader = rowsEntries[0].split(','); 
const countOfColumns = rowHeader.length; 
console.log(rowHeader); 
console.log(`Number of columns: ${countOfColumns}`);



// Creates an empty parent array to store/hold each row as a separate array inside.
const twoDimensionalArray = [];

/* Loops through each row in the rowsEntries array. Starts at index 0, which is the header row. Split each row into individual cells using the comma delimiter. 
Add each resulting array to the parent array.*/
for (let i = 0; i < rowsEntries.length; i++) {
  const row = rowsEntries[i].split(','); 
  twoDimensionalArray.push(row); 
}

/* Output of two-dimensional array :[
["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor's Assistant", "26"]]*/
console.log(twoDimensionalArray);



// Store the two-dimensional array for later use
const cachedData = twoDimensionalArray;

// Output the two-dimensional array. This will display the header row and all the data rowsEntries.
console.log('Two-Dimensional Array:', cachedData);