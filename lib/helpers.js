// General Helper Functions

// Function to convert a file to base64 format
function convertToBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        callback(event.target.result);
    };
    reader.readAsDataURL(file);
}

// Function to clear the content of a canvas
function clearCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to reset an input field (file, text, etc.)
function resetInput(inputElement) {
    inputElement.value = '';  // Clear the value of the input field
}

// Function to toggle the visibility of an element
function toggleVisibility(element, isVisible) {
    element.style.display = isVisible ? 'block' : 'none';
}
