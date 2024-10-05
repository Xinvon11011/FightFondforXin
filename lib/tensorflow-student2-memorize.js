// Student 2 - TensorFlow: Memorizes interior objects and links them
let memory = [];  // Store recognized objects

async function memorizeAndLinkObjects(image) {
    const predictions = await identifyShapesAndObjects(image);

    // Add recognized objects to memory
    memory.push(predictions);

    // Link objects between images
    const linkedObjects = memory.reduce((acc, current) => {
        current.forEach((obj, index) => {
            if (acc[index] && obj === acc[index]) {
                acc[index] = obj;  // Link object if found in another image
            }
        });
        return acc;
    }, []);

    return linkedObjects;  // Return linked objects
}
