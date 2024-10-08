export function clearGeneratedJunk(logId) {
    const logElement = document.getElementById(logId);
    if (logElement) {
        logElement.innerHTML = '';
        console.log('Junk cleared.');
    }
}
