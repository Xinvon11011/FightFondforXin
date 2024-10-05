// Student5TensorFlow.js

class Student5TensorFlow {
    constructor() {}

    // Method to generate and compile SVG from predictions
    generateSVG(predictions) {
        try {
            if (!predictions) {
                throw new Error("No predictions provided for SVG generation.");
            }

            // Start building the SVG structure
            let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">\n`;

            // Loop through the predictions (assuming predictions contain room positions and sizes)
            predictions.forEach((prediction, index) => {
                // Example: Each prediction could have room coordinates and dimensions (x, y, width, height)
                svgContent += `<rect x="${prediction.x}" y="${prediction.y}" width="${prediction.width}" height="${prediction.height}" style="fill:lightgray;stroke:black;stroke-width:2" />\n`;
                svgContent += `<text x="${prediction.x + 5}" y="${prediction.y + 15}" fill="black">Room ${index + 1}</text>\n`;
            });

            svgContent += `</svg>`;

            console.log('SVG generated successfully');
            return svgContent;
        } catch (error) {
            console.error('Error generating SVG:', error);
            return null;
        }
    }

    // Method to trigger download of the generated SVG
    downloadSVG(svgContent, fileName = 'floorplan.svg') {
        try {
            if (!svgContent) {
                throw new Error("No SVG content available for download.");
            }

            // Create a blob for the SVG content and a link element to download it
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;

            // Append link to the body, trigger download, and remove the link
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log('SVG download triggered successfully.');
        } catch (error) {
            console.error('Error downloading SVG:', error);
        }
    }
}

// Example Usage
const student5 = new Student5TensorFlow();

// Assuming we have refined predictions ready from previous students
const predictions = [
    { x: 50, y: 50, width: 100, height: 100 },
    { x: 200, y: 50, width: 100, height: 100 },
    { x: 50, y: 200, width: 100, height: 100 },
    { x: 200, y: 200, width: 100, height: 100 },
];

// Generate SVG and trigger download
const svgContent = student5.generateSVG(predictions);
if (svgContent) {
    student5.downloadSVG(svgContent);
}

export default Student5TensorFlow;
