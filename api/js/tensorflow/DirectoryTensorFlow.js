// DirectoryTensorFlow.js

// Load TensorFlow.js library
import * as tf from '@tensorflow/tfjs';

// Load the model
async function loadModel(modelUrl) {
    try {
        const model = await tf.loadLayersModel(modelUrl);
        console.log('Model loaded successfully');
        return model;
    } catch (error) {
        console.error('Error loading model:', error);
    }
}

// Make predictions with the loaded model
async function makePrediction(model, inputTensor) {
    try {
        const predictions = await model.predict(inputTensor);
        return predictions;
    } catch (error) {
        console.error('Error during prediction:', error);
    }
}

// Prepare input tensor from image
function prepareImage(image) {
    const tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([224, 224])  // Resize image to fit the model input
        .toFloat()
        .expandDims();  // Add batch dimension
    return tensor;
}

// Export functions for use in the main program
export { loadModel, makePrediction, prepareImage };
