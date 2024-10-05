// ML5 Student 6: Displays floorplans or shows error message
function displayFloorplansOrError() {
    const floorplansGenerated = true;  // Simulate success/failure
    const resultArea = document.getElementById('resultArea');

    if (floorplansGenerated) {
        const dataURL = getFloorplanDataURL();
        const img = document.createElement('img');
        img.src = dataURL;
        resultArea.appendChild(img);  // Display floorplan
    } else {
        resultArea.innerHTML = "<p style='color:red;'>Error generating floorplan.</p>";
    }
}
