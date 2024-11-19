// Example transformed data from Part 3
const transformedData = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }
  ];
  
  // Step 1: Remove the last element
  transformedData.pop();
  
  // Step 2: Insert the new object at index 1
  const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  transformedData.splice(1, 0, newObjectAtIndex1);
  
  // Step 3: Add the new object to the end of the array
  const newObjectAtEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  transformedData.push(newObjectAtEnd);
  
  // Step 4: Calculate the average age
  let totalAge = 0;
  for (let i = 0; i < transformedData.length; i++) {
    totalAge += parseInt(transformedData[i].age); // Convert age to a number and add to total
  }
  const averageAge = totalAge / transformedData.length;
  
  // Output results
  console.log('Transformed Data:', transformedData);
  console.log('Average Age:', averageAge);
  