function findMatchingIdAndRequests(array1, array2) {
	let match = ""; // Initialize match as an empty string
	// Iterate through each object in myArray
	for (const obj1 of array1) {
	  // Iterate through each object in professional.requestInfo
	  for (const obj2 of array2.requestInfo) {
		// Check if id in myArray matches requests in professional.requestInfo
		if (obj1.id === obj2.requests) {
		  // Assign the matched value to match as a string
		  match = `${obj1.id}`;
		  // Return match if you only want to find the first match
		  return match;
		}
	  }
	}
	return match; // Return match, which will be an empty string if no match is found
  }
  const match = findMatchingIdAndRequests(myArray, professional);
  console.log(match); // Output: "1" (since the first object in myArray matches with the first object in professional.requestInfo)


  export default utils;