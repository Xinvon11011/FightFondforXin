// DOM Elements
const pngCanvas = document.getElementById('pngCanvas');
const imageCanvas = document.getElementById('imageCanvas');
const numbericCounter = document.getElementById('Numberic');
const totalCounter = document.getElementById('Totalmade');

// Variables for handling image/floorplan data
let uploadedImageFiles = [];
let generatedFloorplans = [];
let floorplansGenerated = 0;
let currentScaleFactor = 1;

// Function to initialize canvas and clear previous content
function initializeCanvas() {
    clearCanvas(pngCanvas);
    clearCanvas(imageCanvas);
    generatedFloorplans = [];
    floorplansGenerated = 0;
    currentScaleFactor = 1;
    numbericCounter.textContent = '0';
    totalCounter.textContent = '0';
}

// Function to handle displaying floorplans after TensorFlow/ML5 processing
function displayGeneratedFloorplans(floorplans) {
    const ctx = pngCanvas.getContext('2d');
    ctx.clearRect(0, 0, pngCanvas.width, pngCanvas.height); // Clear any previous data

    // Iterate through floorplans and render them on the canvas
    floorplans.forEach((floorplan, index) => {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, index * 150, 0, 150, 150); // Adjust size and placement as needed
        };
        img.src = floorplan; // Assuming floorplan is a base64 image URL
    });

    // Update floorplan count
    floorplansGenerated = floorplans.length;
    numbericCounter.textContent = floorplansGenerated;
    totalCounter.textContent = floorplansGenerated; // Update total count
}

// Function to generate floorplans using TensorFlow/ML5 models
function generateFloorplans() {
    // Ensure images are uploaded before generating
    if (uploadedImageFiles.length === 0) {
        displayError('Please upload images to generate floorplans.');
        return;
    }

    // Example TensorFlow/ML5 Model interaction (adjust as needed based on your model)
    // Assume we have a TensorFlow/ML5 model to process the images and generate floorplans

    // Load TensorFlow/ML5 model (this is a placeholder, adjust as per your model)
    ml5.imageClassifier('path/to/your/model', function(model) {
        uploadedImageFiles.forEach((imageFile, index) => {
            const img = new Image();
            img.src = URL.createObjectURL(imageFile);
            img.onload = () => {
                // Classify the image or process it to generate the floorplan
                model.classify(img, (err, results) => {
                    if (err) {
                        displayError('Error processing image.');
                        return;
                    }
                    // Assume the result is a floorplan in base64 format
                    const floorplan = results[0].floorplanImage;
                    generatedFloorplans.push(floorplan);
                    if (generatedFloorplans.length === uploadedImageFiles.length) {
                        // Display all generated floorplans once processing is done
                        displayGeneratedFloorplans(generatedFloorplans);
                    }
                });
            };
        });
    });
}

// Zoom in functionality for canvas
function zoomInCanvas() {
    currentScaleFactor += 0.1;
    applyZoomToCanvas(pngCanvas, currentScaleFactor);
}

// Zoom out functionality for canvas
function zoomOutCanvas() {
    currentScaleFactor = Math.max(1, currentScaleFactor - 0.1);
    applyZoomToCanvas(pngCanvas, currentScaleFactor);
}

// Helper function to apply zoom on a canvas
function applyZoomToCanvas(canvas, scaleFactor) {
    const ctx = canvas.getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous content
    displayGeneratedFloorplans(generatedFloorplans); // Redraw floorplans with the new scale
}

// Clear content from a canvas
function clearCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Reset canvas and floorplan generation state
function resetCanvas() {
    initializeCanvas();
}

// Download generated floorplans as PNG
function downloadFloorplans() {
    const link = document.createElement('a');
    link.download = 'generated_floorplans.png';
    link.href = pngCanvas.toDataURL();
    link.click();
}

// Set up initial state
initializeCanvas();

// Event listeners (to be linked in your script.js or where appropriate)
document.getElementById('zoomIn').addEventListener('click', zoomInCanvas);
document.getElementById('zoomOut').addEventListener('click', zoomOutCanvas);
document.getElementById('resetButton').addEventListener('click', resetCanvas);
document.getElementById('download').addEventListener('click', downloadFloorplans);
// canvas.js - Handles drawing on the canvas and displaying floorplans

// DOM Elements

// Function to display floorplans on the canvas
function displayGeneratedFloorplans(floorplans) {
    const ctx = pngCanvas.getContext('2d');
    ctx.clearRect(0, 0, pngCanvas.width, pngCanvas.height);  // Clear previous floorplans

    // Iterate through floorplans and render them on the canvas
    floorplans.forEach((floorplan, index) => {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, index * 150, 0, 150, 150);  // Adjust size and placement
        };
        img.src = floorplan;  // Assuming floorplan is a base64 image URL
    });
}

// Function to zoom in/out the canvas
function zoomInCanvas() {
    // Implement zoom in functionality here
}

function zoomOutCanvas() {
    // Implement zoom out functionality here
}

// Bind zoom and reset actions
document.getElementById('zoomIn').addEventListener('click', zoomInCanvas);
document.getElementById('zoomOut').addEventListener('click', zoomOutCanvas);
document.getElementById('resetButton').addEventListener('click', () => {
    pngCanvas.getContext('2d').clearRect(0, 0, pngCanvas.width, pngCanvas.height);
});