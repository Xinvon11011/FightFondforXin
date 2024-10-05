// TeacherTensorFlow.js

import * as tf from '@tensorflow/tfjs';
import Student1TensorFlow from './Student1TensorFlow.js';
import Student2TensorFlow from './Student2TensorFlow.js';
import Student3TensorFlow from './Student3TensorFlow.js';
import Student4TensorFlow from './Student4TensorFlow.js';
import Student5TensorFlow from './Student5TensorFlow.js';
import Student6TensorFlow from './Student6TensorFlow.js';

class TeacherTensorFlow {
    constructor() {
        this.model = null;
        this.students = {
            student1: new Student1TensorFlow(),
            student2: null,  // Will be initialized once the model is loaded
            student3: new Student3TensorFlow(),
            student4: new Student4TensorFlow(),
            student5: new Student5TensorFlow(),
            student6: new Student6TensorFlow(),
        };
    }

    // Ensure TensorFlow.js is ready and load the model
    async installToolsAndLoadModel(modelUrl) {
        try {
            console.log('TensorFlow.js is ready.');
            this.model = await tf.loadLayersModel(modelUrl);
            this.students.student2 = new Student2TensorFlow(this.model);
            console.log('Model loaded successfully.');
        } catch (error) {
            console.error('Error loading TensorFlow.js or model:', error);
        }
    }

    // Execute the entire process across all students
    async processImage(imageElement) {
        try {
            // Step 1: Student 1 - Preprocess the image
            const preprocessedImageTensor = this.students.student1.preprocessImage(imageElement);
            if (!preprocessedImageTensor) throw new Error("Failed to preprocess the image.");

            // Step 2: Student 2 - Run predictions using the TensorFlow model
            const predictions = await this.students.student2.makePrediction(preprocessedImageTensor);
            if (!predictions) throw new Error("Failed to generate predictions.");

            // Step 3: Student 3 - Refine and format the predictions
            const refinedResults = this.students.student3.refinePredictions(predictions);
            if (!refinedResults) throw new Error("Failed to refine predictions.");

            // Step 4: Student 5 - Generate the SVG from refined results
            const svgContent = this.students.student5.generateSVG(refinedResults);
            if (!svgContent) throw new Error("Failed to generate SVG content.");

            // Step 5: Student 6 - Display the SVG
            this.students.student6.displaySVG(svgContent);

        } catch (error) {
            // Step 4: If anything fails, handle the error and retry using Student 4
            console.error('An error occurred during the process:', error);
            this.students.student4.handleError(error);
        }
    }
}

// Example Usage
const teacher = new TeacherTensorFlow();
const modelUrl = 'path/to/model.json';  // Provide the model URL

// Load the model and tools
await teacher.installToolsAndLoadModel(modelUrl);

// Assuming we have an image element to process
const imageElement = document.getElementById('uploadedImage');  // Get the image element from the DOM

// Start the process
teacher.processImage(imageElement);

export default TeacherTensorFlow;
