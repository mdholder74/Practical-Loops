// Part 4: Sorting and Manipulating Data
/*Instructions
Using array methods, accomplish the following tasks, in order upon the result of Part 3:
Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
*/
const convertedData = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }
  ];
  
  // Removes the last element from the array
  convertedData.pop();
  
  // Inserts the new object at index 1. The object is inserted at index 1, and no elements are removed by using the splice() method.
  const newJobData1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  convertedData.splice(1, 0, newJobData1);
  
  // Inserts the new object at index 4 
  const newJobData4 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  convertedData.push(newJobData4);
  
  /* Iterates through the array. parseInt: Converts the age value from a string to an integer and adds it to sumOfAge. 
  The sumOfAge age is divided by the number of elements in the array. */
  let sumOfAge = 0;
  for (let i = 0; i < convertedData.length; i++) {
    sumOfAge = sumOfAge + parseInt(convertedData[i].age); 
  }
  const averageAge = sumOfAge / convertedData.length;
  
  // Output results of the array and the average age
  console.log('CSV Job Data Set:', convertedData);
  console.log('Average Age Job Data Set:', averageAge);
  