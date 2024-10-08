// Import ML5 library
import * as ml5 from 'ml5';

// Function to generate rooms using ML5 model
export async function generateRooms(imageElement) {
    try {
        const results = await ml5.imageClassifier('MobileNet').classify(imageElement);
        results.forEach(result => {
            console.log(`Room: ${result.label}, Confidence: ${result.confidence}`);
        });
    } catch (error) {
        console.error('Error generating rooms:', error);
    }
}
