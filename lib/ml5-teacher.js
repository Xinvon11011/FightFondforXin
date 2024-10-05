// ML5 Teacher: Manages students for description processing and TensorFlow interaction
function manageDescriptionProcessing() {
    if (checkDescriptionFilled()) {
        const description = document.getElementById('descriptionArea').value;

        // Send description to Student 2 for profanity filtering and translation
        const cleanedDescription = filterProfanityAndTranslate(description);

        // Update memory using Student 4
        updateProjectMemory(cleanedDescription);

        // Send cleaned description to TensorFlow via Student 3
        sendDescriptionToTensorFlow(cleanedDescription);

        // Wait for TensorFlow to finish via Student 5
        waitForTensorFlowFloorplans();

        // Finally, display the results via Student 6
        displayFloorplansOrError();
    } else {
        console.log("No description to process.");
    }
}
