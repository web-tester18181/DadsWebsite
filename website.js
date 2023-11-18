

/*
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav.bottom-nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    fadeOut(otherLink.querySelector('img'));
                }
            });
        });

        link.addEventListener('mouseleave', () => {
            navLinks.forEach(otherLink => {
                fadeIn(otherLink.querySelector('img'));
            });
        });

        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default behavior of following the link

            const imageId = link.getAttribute('data-image-id');
            const imagePath = link.getAttribute('href');
            const mainImage = document.querySelector('img');

            // Set the source of the main image to the clicked chapter image
            mainImage.src = imagePath;

            // Ensure all nav links are at full opacity
            navLinks.forEach(otherLink => {
                fadeIn(otherLink.querySelector('img'));
            });
        });
    });

    function fadeOut(element) {
        let opacity = 1;
        function animate() {
            opacity -= 0.05;
            if (opacity >= 0.5) {
                element.style.opacity = opacity;
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = 0.5;
            }
        }
        animate();
    }

    function fadeIn(element) {
        let opacity = 0.5;
        function animate() {
            opacity += 0.05;
            if (opacity <= 1) {
                element.style.opacity = opacity;
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = 1;
            }
        }
        animate();
    }
});
*/

/* this is working fine */

document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the image and chapter links
    var mainImage = document.querySelector('img');
    var chapterLinks = document.querySelectorAll('.bottom a');

    // Add click event listeners to each chapter link
    chapterLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the data-image-id attribute from the clicked link
            var imageId = link.getAttribute('data-image-id');

            // Get the source attribute from the clicked link and set it to the image
            var chapterImageSrc = link.getAttribute('href');
            mainImage.setAttribute('src', chapterImageSrc);
        });
    });
});
