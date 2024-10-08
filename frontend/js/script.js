import { readTextareaInput } from './TensorFlow/Textarea-Read.js';
import { createBlankCanvas } from './TensorFlow/Blank-Canvas-Create.js';
import { generateRooms } from './ML5/Generate-Rooms.js';

const canvasId = 'floorplan-canvas';
const textareaId = 'description-textarea';
let currentImageIndex = 0;
let images = [];
let scale = 1;

// Handle generating the floorplan
function handleStart() {
    const description = readTextareaInput(textareaId);
    createBlankCanvas(canvasId, 1280, 720);
    console.log('Floorplan generation started with description:', description);
}

// Handle image upload (up to 55 images)
function handleImageUpload(event) {
    const files = event.target.files;
    if (files.length > 55) {
        alert('You can only upload up to 55 images.');
        return;
    }
    images = Array.from(files).map(file => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        return img;
    });
    displayImage(currentImageIndex);
}

// Display current image on canvas
function displayImage(index) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const img = images[index];

    img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width * scale, canvas.height * scale);
    };
}

// Handle navigating images
function handleNext() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        displayImage(currentImageIndex);
    }
}

function handlePrevious() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        displayImage(currentImageIndex);
    }
}

// Handle zooming
function zoomIn() {
    scale += 0.1;
    displayImage(currentImageIndex);
}

function zoomOut() {
    if (scale > 0.2) {
        scale -= 0.1;
        displayImage(currentImageIndex);
    }
}

// Handle reset
function handleReset() {
    currentImageIndex = 0;
    scale = 1;
    images = [];
    createBlankCanvas(canvasId, 1280, 720);
}

// Handle downloading the canvas in selected format
function downloadCanvas() {
    const canvas = document.getElementById(canvasId);
    const format = document.getElementById('download-format').value;
    const link = document.createElement('a');
    link.download = `floorplan.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
}

export { handleStart, handleImageUpload, handleNext, handlePrevious, zoomIn, zoomOut, handleReset, downloadCanvas };
