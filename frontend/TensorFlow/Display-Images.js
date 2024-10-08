import * as tf from '@tensorflow/tfjs';

export function displayImagesOnCanvas(imageElements, canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');

    imageElements.forEach((image, index) => {
        context.drawImage(image, index * 100, 0);
    });
    console.log('Images displayed on canvas.');
}
