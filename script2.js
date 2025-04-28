let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let modeToggle = document.querySelector('.bx-moon, .bx-sun');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Swap icons
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.classList.remove('bx-moon');
        modeToggle.classList.add('bx-sun');
    } else {
        modeToggle.classList.remove('bx-sun');
        modeToggle.classList.add('bx-moon');
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navLinks.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .profile-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { delay: 500 });

const typed = new Typed('.multiple-text',{
    strings: ['Machine Learning Engineer', 'Machine Learning Specialist', 'Data Scientist', 'Web Developer', 'Aiml Content Writer'],
    typeSpeed:20,
    backSpeed:20,
    backdelay:800,
    loop:true
});

const type = new Typed('.dotted-line',{
    strings: ['.....'],
    typeSpeed: 20,
    backSpeed: 20,
    loop:true
});

