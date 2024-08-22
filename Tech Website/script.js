document.getElementById('hamburger-icon').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
});

document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.getElementById('nav');
        nav.style.display = 'none';
    });
});
