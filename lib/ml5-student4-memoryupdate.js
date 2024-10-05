// ML5 Student 4: Handles memory updates
let projectMemory = [];

function updateProjectMemory(description) {
    if (!projectMemory.includes(description)) {
        projectMemory.push(description);
        console.log("Memory updated with new description.");
    } else {
        console.log("Description already exists in memory.");
    }
}
