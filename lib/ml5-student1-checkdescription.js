// ML5 Student 1: Checks if description is filled or empty
function checkDescriptionFilled() {
    const description = document.getElementById('descriptionArea').value;
    if (description.trim() === '') {
        console.log("Description is empty.");
        return false;
    } else {
        console.log("Description is filled.");
        return true;
    }
}
