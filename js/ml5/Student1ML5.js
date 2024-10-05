// Student1ML5.js

class Student1ML5 {
    constructor() {}

    // Method to validate if the description is filled
    validateDescription(description) {
        if (!description || description.trim() === '') {
            console.error('Description is empty.');
            return false;
        }
        console.log('Description is valid.');
        return true;
    }
}

// Export the Student1 class
export default Student1ML5;
