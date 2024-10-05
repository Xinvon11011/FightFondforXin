// ML5 Student 2: Blocks profanity and translates foreign words
function filterProfanityAndTranslate(description) {
    const profanityList = ["badword1", "badword2"];  // Example list
    const translatedDescription = description.split(' ').map(word => {
        if (profanityList.includes(word.toLowerCase())) {
            return "****";  // Replace profanity
        }
        return translateIfNecessary(word);  // Translate non-English words
    }).join(' ');

    console.log("Processed description:", translatedDescription);
    return translatedDescription;
}

function translateIfNecessary(word) {
    // Placeholder for language translation logic
    // Translate non-English words to English using a predefined function
    return word;  // In this example, we assume no translation is needed
}
