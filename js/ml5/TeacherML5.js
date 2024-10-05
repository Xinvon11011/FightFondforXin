// TeacherML5.js

import ml5 from 'ml5';
import Student1ML5 from './Student1ML5.js';
import Student2ML5 from './Student2ML5.js';
import Student3ML5 from './Student3ML5.js';
import Student4ML5 from './Student4ML5.js';
import Student5ML5 from './Student5ML5.js';
import Student6ML5 from './Student6ML5.js';

class TeacherML5 {
    constructor() {
        this.students = {
            student1: new Student1ML5(),
            student2: new Student2ML5(),
            student3: new Student3ML5(),
            student4: new Student4ML5(),
            student5: new Student5ML5(),
            student6: new Student6ML5(),
        };
    }

    // Ensure ML5 is ready and models are loaded
    async installToolsAndInitializeModels() {
        try {
            console.log('ML5.js is ready.');
            // Initialize any required models for each student (if necessary)

            // Example: If student needs a neural network model
            // const nn = ml5.neuralNetwork(options);
            // this.students.student1.initializeModel(nn);
            
            console.log('ML5 models initialized successfully.');
        } catch (error) {
            console.error('Error loading ML5.js or initializing models:', error);
        }
    }

    // Execute the entire process across all students in ML5
    async processDescription(description) {
        try {
            // Step 1: Student 1 - Validate if the description is filled or empty
            const isDescriptionValid = this.students.student1.validateDescription(description);
            if (!isDescriptionValid) throw new Error("Description validation failed.");

            // Step 2: Student 2 - Filter out profanity or translate different languages
            const filteredDescription = this.students.student2.filterAndTranslate(description);
            if (!filteredDescription) throw new Error("Failed to filter or translate description.");

            // Step 3: Student 3 - Pass the filtered description to TensorFlow pipeline (interface with TensorFlow)
            const processedDescription = this.students.student3.processForTensorFlow(filteredDescription);
            if (!processedDescription) throw new Error("Failed to process description for TensorFlow.");

            // Step 4: Student 4 - Handle memory updates based on the processed description
            const memoryUpdated = this.students.student4.updateMemory(processedDescription);
            if (!memoryUpdated) throw new Error("Failed to update memory with processed description.");

            // Step 5: Student 5 - Wait for TensorFlow to complete floor plan creation
            const planReady = await this.students.student5.waitForTensorFlow();
            if (!planReady) throw new Error("Failed to receive floor plans from TensorFlow.");

            // Step 6: Student 6 - Display or handle the final output from TensorFlow
            const displaySuccess = this.students.student6.displayResults();
            if (!displaySuccess) throw new Error("Failed to display the final floor plan.");
        } catch (error) {
            console.error('An error occurred during the ML5 process:', error);
        }
    }
}

// Example Usage
const teacherML5 = new TeacherML5();

// Initialize the ML5 models
await teacherML5.installToolsAndInitializeModels();

// Assuming we have a house description to process
const houseDescription = "4-bedroom house with open kitchen and large living room";

// Start the process with the given description
teacherML5.processDescription(houseDescription);

export default TeacherML5;
