export function handleInvalidInput(errorMessage) {
    console.error(`Invalid Input: ${errorMessage}`);
    
    const errorLog = document.getElementById('error-log');
    if (errorLog) {
        errorLog.innerText = `Invalid Input: ${errorMessage}`;
    }
}
