function loadPreferences() {
    const savedPreferences = JSON.parse(localStorage.getItem("preferences"));

    if (savedPreferences) {
        // Apply saved preferences to the page
        const header = document.querySelector("header");
        const navbar = document.querySelector(".navbar");
        if (header) header.style.backgroundColor = savedPreferences.headerColor;
        if (navbar) navbar.style.backgroundColor = savedPreferences.headerColor;

        document.body.style.backgroundColor = savedPreferences.bgColor;
        document.body.style.color = savedPreferences.textColor;
        document.body.style.fontFamily = savedPreferences.fontFamily;

        // Set the input values to match the saved preferences
        const hColor = document.getElementById("h-color");
        const bgColor = document.getElementById("bg-color");

        if (hColor) hColor.value = savedPreferences.headerColor;
        if (bgColor) bgColor.value = savedPreferences.bgColor;
    }
}

// Function to save preferences to localStorage
function savePreferences(preferences) {
    localStorage.setItem("preferences", JSON.stringify(preferences));
}


// Event listener for the preferences form submission (only on preferences.html)
document.addEventListener("DOMContentLoaded", () => {
    // Apply preferences on page load
    loadPreferences();

    // If the preferences form exists, add the event listener
    const form = document.querySelector(".preferences");
    const hColor = document.getElementById("h-color");
    const bgColor = document.getElementById("bg-color");
    const submit = document.getElementById("submit");

    if (form && submit) {
        submit.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent page reload

            // Get values from the form
            const headerColor = hColor.value;
            const backgroundColor = bgColor.value;

            // Apply changes to the current page
            const header = document.querySelector("header");
            const navbar = document.querySelector(".navbar");
            if (header) header.style.backgroundColor = headerColor;
            if (navbar) navbar.style.backgroundColor = headerColor;

            document.body.style.backgroundColor = backgroundColor;

            // Save preferences to localStorage
            const preferences = {
                headerColor,
                bgColor: backgroundColor,
            };
            savePreferences(preferences); // Save preferences globally
        });
    }
});