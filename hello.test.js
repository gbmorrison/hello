// Test case 1: Testing with same dates
console.log(calculateDaysBetweenDates(new Date(2022, 0, 1), new Date(2022, 0, 1))); // Expected output: 0

// Test case 2: Testing with different dates
console.log(calculateDaysBetweenDates(new Date(2022, 0, 1), new Date(2022, 0, 5))); // Expected output: 4

// Test case 3: Testing with negative difference
console.log(calculateDaysBetweenDates(new Date(2022, 0, 5), new Date(2022, 0, 1))); // Expected output: -4

// Test case 4: Testing with dates in different years
console.log(calculateDaysBetweenDates(new Date(2021, 11, 31), new Date(2022, 0, 1))); // Expected output: 1

// Test case 5: Testing with dates in different months
console.log(calculateDaysBetweenDates(new Date(2022, 0, 31), new Date(2022, 1, 1))); // Expected output: 1