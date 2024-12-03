function loadPreferences() {
    const savedPreferences = JSON.parse(localStorage.getItem("preferences"));

    if (savedPreferences) {
        // Apply saved preferences to the page
        const header = document.querySelector("header");
        const navbar = document.querySelector(".navbar");
        if (header) header.style.backgroundColor = savedPreferences.headerColor;
        if (navbar) navbar.style.backgroundColor = savedPreferences.headerColor;

        document.body.style.backgroundColor = savedPreferences.bgColor;

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
    const reset = document.getElementById("default");

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
                bgColor: backgroundColor
            };
            savePreferences(preferences); // Save preferences globally
        });
        reset.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent page reload
        
            // Define default color values
            const defaultHeaderColor = "#ffffff"; // Replace with your actual default header color
            const defaultBackgroundColor = "#f8f9fa"; // Replace with your actual default background color
        
            // Apply default styles to the page
            const header = document.querySelector("header");
            const navbar = document.querySelector(".navbar");
            if (header) header.style.backgroundColor = defaultHeaderColor;
            if (navbar) navbar.style.backgroundColor = defaultHeaderColor;
        
            document.body.style.backgroundColor = defaultBackgroundColor;
        
            // Update color pickers in the form
            const hColor = document.getElementById("h-color");
            const bgColor = document.getElementById("bg-color");
            if (hColor) hColor.value = defaultHeaderColor;
            if (bgColor) bgColor.value = defaultBackgroundColor;
        
            // Save default preferences to localStorage
            const preferences = {
                headerColor: defaultHeaderColor,
                bgColor: defaultBackgroundColor
            };
            savePreferences(preferences); // Save preferences globally
        });
    }
});