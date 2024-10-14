const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileOverlayLink = document.querySelectorAll('.mobile-overlay__link');

mobileOverlayLink.forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.close();
    });
});