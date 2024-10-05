// DOM Elements
const imageUpload = document.getElementById('imageUpload');
const descriptionArea = document.getElementById('descriptionArea');
const imageCanvas = document.getElementById('imageCanvas');
const pngCanvas = document.getElementById('pngCanvas'); // Updated ID
const startCracking = document.getElementById('startCracking');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const downloadBtn = document.getElementById('download');
const previewBtn = document.getElementById('preview');
const deleteBtn = document.getElementById('deleteImage');
const resetBtn = document.getElementById('resetButton');
const numbericCounter = document.getElementById('Numberic');
const totalCounter = document.getElementById('Totalmade');

let uploadedImages = [];
let floorplansGenerated = 0;

// Handling image uploads
imageUpload.addEventListener('change', function(event) {
    const files = event.target.files;
    if (files.length > 40) {
        alert('Maximum of 40 images allowed.');
        return;
    }
    uploadedImages = Array.from(files);
    displayImages();
});

function displayImages() {
    const ctx = imageCanvas.getContext('2d');
    ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    uploadedImages.forEach((imgFile, index) => {
        const img = new Image();
        img.src = URL.createObjectURL(imgFile);
        img.onload = () => {
            ctx.drawImage(img, index * 150, 0, 150, 150); // Adjust as needed
        };
    });
}

// Handling start cracking (AI floorplan generation)
startCracking.addEventListener('click', function() {
    if (uploadedImages.length === 0) {
        alert('Please upload images before starting the process.');
        return;
    }
    // Simulate AI processing logic (TensorFlow/ML5)
    generateFloorplans();
});

function generateFloorplans() {
    // Simulate floorplan generation with TensorFlow/ML5 AI
    // Use AI logic here (e.g., fetching from TensorFlow/ML5)
    
    floorplansGenerated = 8; // Example: generating 8 floorplans
    numbericCounter.textContent = floorplansGenerated;
    totalCounter.textContent = 8; // Update with real data
    
    displayFloorplans();
}

function displayFloorplans() {
    const ctx = pngCanvas.getContext('2d'); // Updated to pngCanvas
    ctx.clearRect(0, 0, pngCanvas.width, pngCanvas.height);

    // Simulating floorplan images on the second canvas (PNG canvas)
    for (let i = 0; i < floorplansGenerated; i++) {
        ctx.fillStyle = '#000'; // Example black floorplan
        ctx.fillRect(i * 150, 50, 100, 100); // Placeholder for floorplan
    }

    // Show tools like download, zoom, etc.
    toggleImageTools(true);
}

// Zoom in and out functionality
let scaleFactor = 1;
zoomIn.addEventListener('click', () => {
    scaleFactor += 0.1;
    applyZoom(pngCanvas, scaleFactor); // Updated to pngCanvas
});
zoomOut.addEventListener('click', () => {
    scaleFactor = Math.max(1, scaleFactor - 0.1);
    applyZoom(pngCanvas, scaleFactor); // Updated to pngCanvas
});

function applyZoom(canvas, factor) {
    const ctx = canvas.getContext('2d');
    ctx.scale(factor, factor);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    displayFloorplans(); // Re-draw floorplans at new scale
}

// Download functionality (for PNG)
downloadBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'floorplans.png';
    link.href = pngCanvas.toDataURL(); // Updated to pngCanvas
    link.click();
});

// Reset functionality
resetBtn.addEventListener('click', function() {
    resetApp();
});

function resetApp() {
    uploadedImages = [];
    floorplansGenerated = 0;
    numbericCounter.textContent = '0';
    totalCounter.textContent = '0';
    
    const ctx1 = imageCanvas.getContext('2d');
    ctx1.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    
    const ctx2 = pngCanvas.getContext('2d'); // Updated to pngCanvas
    ctx2.clearRect(0, 0, pngCanvas.width, pngCanvas.height);
    
    toggleImageTools(false);
}

function toggleImageTools(show) {
    zoomIn.style.display = show ? 'inline' : 'none';
    zoomOut.style.display = show ? 'inline' : 'none';
    downloadBtn.style.display = show ? 'inline' : 'none';
    previewBtn.style.display = show ? 'inline' : 'none';
    deleteBtn.style.display = show ? 'inline' : 'none';
}

// Initial state: hide image tools
toggleImageTools(false);
// script.js - Main script for managing user interaction and AI processing

// Global variables for images and description
let images = [];
let description = "";

// Function to handle floorplan generation when the "Start Cracking" button is clicked
document.getElementById('startCracking').addEventListener('click', () => {
    // Check if images and description are ready
    description = document.getElementById('descriptionArea').value;
    
    if (images.length === 0 || description.trim() === '') {
        alert("Please upload images and fill in the description before starting.");
        return;
    }
    
    // Call the ML5 Teacher to process the description and TensorFlow to generate the floorplan
    manageDescriptionProcessing();  // ML5 Teacher will oversee the description and TensorFlow
});

// Function to handle image uploads
function handleImageUpload(event) {
    const files = event.target.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            images.push(img);  // Store uploaded image for later processing
        };
        
        reader.readAsDataURL(file);
    }
}

// Bind the image upload input element
document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
// Function to simulate AI processing progress
function updateProgress(step) {
    const progressBar = document.getElementById('progressBar');
    const statusMessage = document.getElementById('statusMessage');
    
    let progress = 0;

    // Update progress bar and status message at each step
    switch (step) {
        case 1:
            statusMessage.innerHTML = "Validating description...";
            progress = 20;
            break;
        case 2:
            statusMessage.innerHTML = "Loading TensorFlow model...";
            progress = 40;
            break;
        case 3:
            statusMessage.innerHTML = "Processing images for floorplan...";
            progress = 60;
            break;
        case 4:
            statusMessage.innerHTML = "Generating floorplan...";
            progress = 80;
            break;
        case 5:
            statusMessage.innerHTML = "Finalizing and displaying floorplan!";
            progress = 100;
            break;
        default:
            statusMessage.innerHTML = "Ready";
            progress = 0;
    }

    progressBar.style.width = `${progress}%`;
}

// Example function that simulates the AI working on generating the floorplan
function simulateAIProcess() {
    updateProgress(1);  // Step 1: Validating description
    setTimeout(() => {
        updateProgress(2);  // Step 2: Loading model
    }, 1000);  // Simulate 1 second delay
    
    setTimeout(() => {
        updateProgress(3);  // Step 3: Processing images
    }, 2000);  // Simulate additional delay

    setTimeout(() => {
        updateProgress(4);  // Step 4: Generating floorplan
    }, 3000);  // Simulate additional delay

    setTimeout(() => {
        updateProgress(5);  // Step 5: Done!
    }, 4000);  // Simulate final step
}

// Bind the Start Cracking button to the process
document.getElementById('startCracking').addEventListener('click', () => {
    simulateAIProcess();  // Simulate the AI working through steps
});
