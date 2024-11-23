const slides = document.querySelectorAll('.slider .slide img');

function move3DEffect(event) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    slides.forEach(slide => {
        slide.style.transform = `rotateY(${x * 40}deg) rotateX(${y * -40}deg)`;
    });
}

document.querySelector('.slider').addEventListener('mousemove', move3DEffect);

document.querySelector('.slider').addEventListener('mouseleave', () => {
    slides.forEach(slide => {
        slide.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
