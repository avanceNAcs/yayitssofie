document.addEventListener('DOMContentLoaded', () => {
    fetch('navBar/navBar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navbar');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Now navbar HTML is loaded, set up toggle button:
            const toggleButton = document.querySelector('.nav-toggle');
            const navLinks = document.querySelector('.nav-links');

            if (toggleButton && navLinks) {
                toggleButton.addEventListener('click', () => {
                    navLinks.classList.toggle('active');

                    // Toggle hamburger <-> close icon
                    if (navLinks.classList.contains('active')) {
                        toggleButton.innerHTML = '&times;';  // × close icon
                        toggleButton.setAttribute('aria-label', 'Close navigation');
                    } else {
                        toggleButton.innerHTML = '&#9776;'; // ☰ hamburger icon
                        toggleButton.setAttribute('aria-label', 'Open navigation');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});
