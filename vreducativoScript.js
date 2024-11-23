function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

        document.addEventListener('DOMContentLoaded', () => {

            const slides = document.querySelectorAll('.slide');

            const btnAnterior = document.querySelector('.anterior');

            const btnProximo = document.querySelector('.proximo');

            let anguloAtual = 0;

            const anguloPorSlide = 360 / slides.length;

            function atualizarSlides() {

                slides.forEach((slide, index) => {

                    const angulo = anguloAtual + index * anguloPorSlide;

                    const radianos = angulo * Math.PI / 180;

                    const elevacao = Math.cos(radianos) * 600;

                    slide.style.transform = `rotateY(${angulo}deg) translateZ(700px) translateY(${elevacao < 0 ? Math.abs(elevacao) : 0}px)`;

                });
            }

            btnAnterior.addEventListener('click', () => {

                anguloAtual -= anguloPorSlide;

                atualizarSlides();

            });

            btnProximo.addEventListener('click', () => {

                anguloAtual += anguloPorSlide;

                atualizarSlides();

            });

            atualizarSlides();

            setInterval(() => {

                anguloAtual += anguloPorSlide;

                atualizarSlides();

            }, 5000);

        });
