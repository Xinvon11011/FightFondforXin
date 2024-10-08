// No ML5 import needed here

// Function to log and handle errors during ML5 processing
export function handleMLError(errorMessage) {
    console.error(`ML5 Error: ${errorMessage}`);
    
    const errorLog = document.getElementById('ml5-error-log');
    if (errorLog) {
        errorLog.innerText = `ML5 Error: ${errorMessage}`;
    }
}
