document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownContent = document.getElementById('dropdown-content');
    const closeBtn = document.getElementById('close-btn');
    const header = document.getElementById('header');

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        sunIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'inline-block';
        moonIcon.style.display = body.classList.contains('dark-mode') ? 'inline-block' : 'none';
    }

    // Check if user prefers dark mode initially
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode(); // Apply dark mode if user prefers it
    }

    // Event listener for mode toggle button
    modeToggle.addEventListener('click', () => {
        toggleDarkMode(); // Toggle dark mode on button click
    });

    // Toggle dropdown menu visibility
    dropdownMenu.addEventListener('click', () => {
        dropdownContent.classList.toggle('open');
        if (dropdownContent.classList.contains('open')) {
            dropdownContent.classList.remove('closed');
        }
    });

    // Close dropdown menu when close button is clicked
    closeBtn.addEventListener('click', () => {
        dropdownContent.classList.add('closed');
    });

    // Close dropdown menu when clicking outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#dropdown-menu') && !event.target.matches('#dropdown-content') && dropdownContent.classList.contains('open')) {
            dropdownContent.classList.add('closed');
        }
    });

    // Reset dropdown menu state after animation ends
    dropdownContent.addEventListener('animationend', () => {
        if (dropdownContent.classList.contains('closed')) {
            dropdownContent.classList.remove('open');
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
