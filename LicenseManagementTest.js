const axios = require('axios');

// Function to check if the license count exceeds the threshold
function checkLicenseThreshold(licenseCounts, threshold) {
  if (licenseCounts > threshold) {
    console.log(`License count ${licenseCounts} exceeds the threshold of ${threshold}`);
  } else {
    console.log(`License count ${licenseCounts} is within the threshold of ${threshold}`);
  }
}

// Function to get the latest license counts
async function getLicenseCounts() {
  const response = await axios.get("https://api.office.com/licenses");
  if (typeof response.data !== 'number') {
    throw new Error("Invalid data format: expected a number");
  }
  return response.data;
}

// Main function to run the program
async function main() {
  try {
    // Get the latest license counts
    const licenseCounts = await getLicenseCounts();

    // Set the threshold value
    const threshold = 100;

    // Check if the license count exceeds the threshold
    checkLicenseThreshold(licenseCounts, threshold);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the main function to start the program
main();

