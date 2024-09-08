// script.ts
// Get references to the DOM elements
var toggleButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
// Add an event listener to the button to toggle visibility of the skills section
toggleButton.addEventListener('click', function () {
    // Check if the skills section is currently displayed
    if (skillsSection.style.display === 'none') {
        // If hidden, show it
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        // If visible, hide it
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
