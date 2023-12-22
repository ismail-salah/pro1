// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Accordion functionality
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            button.querySelector('.arrow').classList.toggle('up');

            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== accordionContent) {
                    item.style.display = 'none';
                    item.previousElementSibling.querySelector('.arrow').classList.remove('up');
                }
            });

            accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Toggle menu functionality
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const navItems = document.querySelector('.nav-items');
            navItems.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Gallery navigation
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const gallery = document.querySelector('.gallery');

    if (nextBtn && prevBtn && gallery) {
        nextBtn.addEventListener('click', () => {
            gallery.scrollBy(300, 0);
        });

        prevBtn.addEventListener('click', () => {
            gallery.scrollBy(-300, 0);
        });
    }
});

