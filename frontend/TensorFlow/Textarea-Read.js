// Import TensorFlow if needed in this module
import * as tf from '@tensorflow/tfjs';

// Function to read and process text input from a textarea
export function readTextareaInput(textareaId) {
    const textarea = document.getElementById(textareaId);
    const inputText = textarea.value.trim();
    
    // Use TensorFlow operations if needed, otherwise process text
    console.log(`Text input received: ${inputText}`);
    return inputText;
}
