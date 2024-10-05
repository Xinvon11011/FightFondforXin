// Student1TensorFlow.js

import * as tf from '@tensorflow/tfjs';

class Student1TensorFlow {
    constructor() {}

    // Preprocess the image for the TensorFlow model
    preprocessImage(imageElement) {
        try {
            // Convert image element (HTML image or canvas) to a tensor
            let tensor = tf.browser.fromPixels(imageElement)
                .resizeNearestNeighbor([224, 224])  // Resize the image to fit the model's input shape
                .toFloat()  // Convert to float tensor
                .div(tf.scalar(255.0))  // Normalize the image values to the range [0, 1]
                .expandDims();  // Add a batch dimension: [1, height, width, channels]

            console.log('Image preprocessed successfully');
            return tensor;

        } catch (error) {
            console.error('Error preprocessing image:', error);
            return null;
        }
    }

    // Example function to check if the image is valid
    validateImage(imageElement) {
        if (!imageElement) {
            console.error('No image element provided');
            return false;
        }
        return true;
    }
}

// Example Usage
const student1 = new Student1TensorFlow();

// Assuming we have an image or canvas element in HTML
const imageElement = document.getElementById('uploadedImage');  // Get image from the DOM

// Validate and preprocess the image
if (student1.validateImage(imageElement)) {
    const preprocessedImageTensor = student1.preprocessImage(imageElement);
    // Pass the preprocessed tensor to the next steps (e.g., model prediction)
}

export default Student1TensorFlow;
