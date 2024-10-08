export function handleInvalidImageInput(errorMessage) {
    console.error(`Invalid Image Input: ${errorMessage}`);
    
    const errorLog = document.getElementById('ml5-error-log');
    if (errorLog) {
        errorLog.innerText = `Invalid Image Input: ${errorMessage}`;
    }
}
