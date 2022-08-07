const navSlide = () => {
    const slice = document.querySelector('.slice');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li');
    
    slice.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animations
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1s forwards ${index / 5 + 0.5}s`;
            }
        });
        // slice animation
        slice.classList.toggle('toggle');

    });
}

navSlide();