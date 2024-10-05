// Student 5 - TensorFlow: Adds text labels to the floorplans
function addTextToFloorplan(floorplan, labels) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Load the floorplan
    const img = new Image();
    img.src = floorplan;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);

        // Add text to the floorplan
        labels.forEach(label => {
            const color = label.type === 'living' ? 'black' : (label.type === 'non-living' ? 'blue' : 'red');
            ctx.fillStyle = color;
            ctx.fillText(label.text, label.x, label.y);  // Add room labels
        });

        return canvas.toDataURL();  // Return the updated floorplan as PNG
    };
}
