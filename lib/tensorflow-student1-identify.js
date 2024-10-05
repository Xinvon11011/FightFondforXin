// Student 1 - TensorFlow: Identifies all shapes and objects in house images
async function identifyShapesAndObjects(image) {
    const model = await tf.loadGraphModel('/lib/model.json');  // Load the TensorFlow model

    // Convert the image to tensor
    const tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([224, 224])  // Resize image
        .toFloat()
        .expandDims();  // Add batch dimension

    // Use the model to predict the shapes and objects
    const predictions = await model.predict(tensor).data();

    return predictions;  // Return predictions for shapes and objects
}
