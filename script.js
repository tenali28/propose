// JavaScript functionality for the Romantic Propose Day website

// Function to show the current date and time in UTC format
function showCurrentDateTime() {
    const now = new Date();
    const utcDateString = now.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', utcDateString);
}

// Call the function to display the date and time
showCurrentDateTime();