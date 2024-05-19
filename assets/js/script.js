document.addEventListener('DOMContentLoaded', () => {
    // Attach click events for smooth scrolling and offcanvas control
    document.querySelectorAll('#bsb-tpl-navbar .nav-link').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Remove active class from all links
            document.querySelectorAll('#bsb-tpl-navbar .nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');

            // Smooth scroll to section
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Hide the offcanvas menu
            const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
            if (offcanvas) {
                offcanvas.hide();
            }
        });
    });

    // Scroll event to update active class based on section visibility
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + (window.innerHeight / 2); // Adjusting to check for middle of viewport for better accuracy

        document.querySelectorAll('#bsb-tpl-navbar .nav-link').forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
const images = document.querySelectorAll("img");

images.forEach(img => {
    img.classList.add("loading");

    img.onload = () => {
    img.classList.remove("loading");
    img.classList.add("loaded");
    };
});
});

