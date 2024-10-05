// Helper function to convert uploaded files to base64 format for preview
function convertToBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        callback(event.target.result);
    };
    reader.readAsDataURL(file);
}

// Function to reset a form element or input
function resetInput(element) {
    element.value = ''; // Clears file input or text input
}

// Function to clear canvas
function clearCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to display uploaded image on a canvas
function displayImageOnCanvas(file, canvas, index, width, height) {
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, index * width, 0, width, height); // Adjust dimensions based on needs
    };
    convertToBase64(file, (dataUrl) => {
        img.src = dataUrl;
    });
}

// Function to handle errors (e.g., during AI generation)
function displayError(message) {
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block'; // Show error message
}

// Function to hide error messages
function hideError() {
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.style.display = 'none'; // Hide error message
}

// Function to toggle visibility of elements (e.g., buttons)
function toggleElementVisibility(element, isVisible) {
    element.style.display = isVisible ? 'inline' : 'none';
}

// Function to validate the number of uploaded images (max 40)
function validateImageCount(files, maxCount = 40) {
    if (files.length > maxCount) {
        displayError(`You can upload a maximum of ${maxCount} images.`);
        return false;
    }
    return true;
}

// Function to download canvas content as PNG
function downloadCanvasAsPNG(canvas, filename) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = filename;
    link.click();
}

// Function to apply zoom to a canvas
function applyZoomToCanvas(canvas, scaleFactor) {
    const ctx = canvas.getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before applying zoom
}
