// script.js
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.05)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});
