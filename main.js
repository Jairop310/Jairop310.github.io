document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');

    mobileMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Cierra el menú desplegable al hacer clic en un enlace
    document.querySelectorAll('.nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    });

    // Agrega o quita la clase 'fixed' al menú al hacer scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
});