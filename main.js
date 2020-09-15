// Sticky header section starts from here
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);
});
// Sticky header section ends from here

// Toggle menu starts from here
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');

    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};
// Toggle menu ends from here