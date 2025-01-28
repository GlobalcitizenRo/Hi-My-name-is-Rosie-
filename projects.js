// Handle navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Scroll to the target section
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
