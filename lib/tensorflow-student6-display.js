// Student 6 - TensorFlow: Displays generated floorplans or shows error
function displayFloorplans(floorplans) {
    const resultArea = document.getElementById('resultArea');

    if (floorplans.length > 0) {
        floorplans.forEach(floorplan => {
            const img = document.createElement('img');
            img.src = floorplan;
            resultArea.appendChild(img);  // Display each floorplan
        });
    } else {
        resultArea.innerHTML = "<p style='color:red;'>Error: Could not generate floorplans.</p>";
    }
}
