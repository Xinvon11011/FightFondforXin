import * as tf from '@tensorflow/tfjs';

export async function readAllImages(imageElements) {
    const imagePromises = imageElements.map(imageElement => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imageElement.src;
            img.onload = () => resolve(img);
            img.onerror = () => reject('Image failed to load');
        });
    });

    return Promise.all(imagePromises)
        .then(images => {
            console.log('All images loaded.');
            return images;
        })
        .catch(error => console.error(error));
}
