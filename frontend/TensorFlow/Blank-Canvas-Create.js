// Import TensorFlow if needed for further processing
import * as tf from '@tensorflow/tfjs';

// Function to create a blank canvas for displaying images or floorplans
export function createBlankCanvas(canvasId, width = 500, height = 500) {
    const canvas = document.getElementById(canvasId);
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    
    // Fill the canvas with a white background
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, width, height);
    
    console.log('Blank canvas created.');
    return context;
}
