document.addEventListener("DOMContentLoaded", function () {
    const noteText = document.getElementById("noteText");
    const saveButton = document.getElementById("saveButton");
    const clearButton = document.getElementById("clearButton");

    // Check if there's a saved note in local storage and display it
    const savedNote = localStorage.getItem("note");
    if (savedNote) {
        noteText.value = savedNote;
    }

    // Event listener for the Save button
    saveButton.addEventListener("click", function () {
        const note = noteText.value;
        localStorage.setItem("note", note);
        alert("Note saved successfully!");
    });

    // Event listener for the Clear button
    clearButton.addEventListener("click", function () {
        noteText.value = "";
        localStorage.removeItem("note");
    });
});
