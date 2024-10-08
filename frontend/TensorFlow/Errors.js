// No TensorFlow import needed

// Function to log and handle errors during TensorFlow processing
export function logError(errorMessage) {
    console.error(`Error: ${errorMessage}`);
    
    // Optionally, display the error to the user
    const errorLog = document.getElementById('error-log');
    if (errorLog) {
        errorLog.innerText = `Error: ${errorMessage}`;
    }
}
