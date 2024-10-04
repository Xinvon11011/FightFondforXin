// Get elements by their IDs
const imageUpload = document.getElementById('imageUpload');
const descriptionArea = document.getElementById('descriptionArea');
const imageCanvas = document.getElementById('imageCanvas');
const svgCanvas = document.getElementById('svgCanvas');
const startCrackingButton = document.getElementById('startCracking');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
const downloadButton = document.getElementById('download');
const previewButton = document.getElementById('preview');
const deleteImageButton = document.getElementById('deleteImage');

// Set canvas dimensions and border properties directly if not done in CSS
imageCanvas.width = 800;
imageCanvas.height = 600;
imageCanvas.style.border = "1px solid black";
svgCanvas.width = 800;
svgCanvas.height = 600;
svgCanvas.style.border = "1px solid black";

// Variables for zoom functionality
let scale = 1;
let img = null;  // Store the current image
let ctx = imageCanvas.getContext('2d');

// Image Upload Handling
imageUpload.addEventListener('change', function(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        handleImageUpload(files[0]);  // Handling the first image for now
    }
});

// Function to handle image upload
function handleImageUpload(file) {
    img = new Image();
    img.src = URL.createObjectURL(file);  // Convert file to object URL
    img.onload = () => {
        drawImage();  // Draw image when it's loaded
    };
}

// Function to draw image on canvas
function drawImage() {
    ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);  // Clear the canvas
    ctx.drawImage(img, 0, 0, imageCanvas.width * scale, imageCanvas.height * scale);  // Draw with scaling
}

// Start Cracking (Processing)
startCrackingButton.addEventListener('click', function() {
    const description = descriptionArea.value;
    if (!img || description.trim() === "") {
        alert("Please upload an image and provide a description before starting.");
        return;
    }
    // Simulate image and description processing
    alert(`Processing: ${description} with image.`);
    // Here you would call AI or TensorFlow processing functions
    // After processing, the result would be displayed on svgCanvas
});

// Zoom In
zoomInButton.addEventListener('click', function() {
    scale += 0.1;  // Increase the scale factor
    drawImage();   // Redraw the image with the new scale
});

// Zoom Out
zoomOutButton.addEventListener('click', function() {
    if (scale > 0.1) {
        scale -= 0.1;  // Decrease the scale factor
        drawImage();   // Redraw the image with the new scale
    }
});

// Download Image
downloadButton.addEventListener('click', function() {
    const dataUrl = imageCanvas.toDataURL();  // Convert canvas to image data URL
    const link = document.createElement('a');  // Create an anchor element for download
    link.href = dataUrl;
    link.download = 'floorplan.png';  // Set download filename
    link.click();  // Trigger the download
});

// Preview Floor Plan (Stub for AI Result)
previewButton.addEventListener('click', function() {
    const ctxSvg = svgCanvas.getContext('2d');
    ctxSvg.clearRect(0, 0, svgCanvas.width, svgCanvas.height);  // Clear SVG canvas
    // Simulate preview result (Here you can display actual AI-generated floorplan)
    ctxSvg.fillStyle = "#000";
    ctxSvg.fillRect(50, 50, 200, 100);  // Example rectangle representing the result
    console.log("Previewing floor plan (This should be AI-generated).");
});

// Delete Image
deleteImageButton.addEventListener('click', function() {
    ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);  // Clear the canvas
    img = null;  // Reset image
    alert("Image deleted.");
});
