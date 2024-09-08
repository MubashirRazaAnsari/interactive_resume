// script.ts

// Get references to the DOM elements
const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add an event listener to the button to toggle visibility of the skills section
toggleButton.addEventListener('click', () => {
  // Check if the skills section is currently displayed
  if (skillsSection.style.display === 'none') {
    // If hidden, show it
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    // If visible, hide it
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});
