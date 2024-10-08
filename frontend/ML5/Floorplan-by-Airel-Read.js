// Import ML5 library
import * as ml5 from 'ml5';

// Function to read an aerial image and generate a floorplan
export async function processAerialImage(imageElement) {
    try {
        const floorplanResults = await ml5.imageClassifier('MobileNet').classify(imageElement);
        console.log('Aerial image processed:', floorplanResults);
        return floorplanResults;
    } catch (error) {
        console.error('Error processing aerial image:', error);
    }
}
