// DOM Elements related to image uploads and management
const imageUploadInput = document.getElementById('imageUpload');
const imagePreviewCanvas = document.getElementById('imageCanvas');
const deleteImageBtn = document.getElementById('deleteImage');

let uploadedImageFiles = [];

// Handle image uploads
imageUploadInput.addEventListener('change', function(event) {
    const files = event.target.files;
    if (!validateImageCount(files)) {
        return; // Exceeded max number of images, show error
    }
    uploadedImageFiles = Array.from(files); // Store files
    previewImages(); // Display images on the canvas
});

// Function to preview uploaded images on the canvas
function previewImages() {
    const ctx = imagePreviewCanvas.getContext('2d');
    ctx.clearRect(0, 0, imagePreviewCanvas.width, imagePreviewCanvas.height); // Clear previous previews

    uploadedImageFiles.forEach((file, index) => {
        const img = new Image();
        img.onload = () => {
            // Draw image on canvas, spaced horizontally
            ctx.drawImage(img, index * 150, 0, 150, 150); // Adjust the size and position as needed
        };
        convertToBase64(file, (dataUrl) => {
            img.src = dataUrl; // Convert file to Base64 and set as image source
        });
    });
}

// Delete the first image in the row and update the canvas
deleteImageBtn.addEventListener('click', function() {
    if (uploadedImageFiles.length === 0) {
        displayError('No images available to delete.');
        return;
    }

    // Remove the first image from the uploaded images array
    uploadedImageFiles.shift(); // Remove the first image
    previewImages(); // Re-render the canvas with the remaining images
});


// Function to delete a specific image by index
function deleteImageAtIndex(index) {
    if (index >= 0 && index < uploadedImageFiles.length) {
        uploadedImageFiles.splice(index, 1); // Remove the image at the specified index
        previewImages(); // Re-render the canvas without the deleted image
    }
}

// Clear uploaded images (e.g., for resetting)
function clearUploadedImages() {
    uploadedImageFiles = [];
    clearCanvas(imagePreviewCanvas); // Clear the canvas
}

// Replace an image at a specific index (e.g., for updating)
function replaceImageAtIndex(file, index) {
    if (index >= 0 && index < uploadedImageFiles.length) {
        uploadedImageFiles[index] = file; // Replace the image at the index
        previewImages(); // Re-render the canvas with the new image
    }
}
// uploader.js - Handles image uploads and previews

// Function to preview uploaded images
function previewImages() {
    const previewArea = document.getElementById('imagePreviewArea');
    previewArea.innerHTML = '';  // Clear existing previews
    
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = `Uploaded Image ${index + 1}`;
        imgElement.style.width = '150px';
        imgElement.style.margin = '10px';
        previewArea.appendChild(imgElement);
    });
}

// Function to delete the first uploaded image
document.getElementById('deleteImage').addEventListener('click', () => {
    if (images.length > 0) {
        images.shift();  // Remove the first image
        previewImages();  // Update the image preview area
    } else {
        alert("No images to delete.");
    }
});

// Event listener for image uploads
document.getElementById('imageUpload').addEventListener('change', (event) => {
    handleImageUpload(event);  // Call the main image upload function
    previewImages();  // Preview images after upload
});
