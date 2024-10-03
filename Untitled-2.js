// script.js
document.addEventListener("DOMContentLoaded", function() {
    const projectImages = document.querySelectorAll('.project img');
    
    projectImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });

        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
