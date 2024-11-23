function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

const texts = [
    "PROGRAMADORA",
    "DESIGNER",
    "GAMER"
];

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

document.addEventListener('DOMContentLoaded', function() {
    const tela = document.getElementById('tela');
    const contexto = tela.getContext('2d');

    const imagemTopo = new Image();
    const imagemFundo = new Image();

    imagemTopo.src = 'imagem-superior.jpg'; // Caminho para a imagem superior
    imagemFundo.src = 'imagem-inferior.jpg'; // Caminho para a imagem inferior


    const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d")

    let posicaoMouseX = 0, posicaoMouseY = 0;
    let raio = 60;

    imagemFundo.onload = imagemTopo.onload = function() {
        desenharImagens();
    };
    function desenharImagens() {
        contexto.clearRect(0, 0, tela.width, tela.height);
        contexto.drawImage(imagemFundo, 0, 0, tela.width, tela.height);

        contexto.save();
        contexto.beginPath();

        let raioHorizontal = raio * 1.5;
        contexto.ellipse(posicaoMouseX, posicaoMouseY, raioHorizontal, raio, 0, 0, Math.PI * 2);

        contexto.clip();
        contexto.drawImage(imagemTopo, 0, 0, tela.width, tela.height);
        contexto.restore();
    }

    tela.addEventListener('mousemove', function(e) {
        const retangulo = tela.getBoundingClientRect();
        posicaoMouseX = e.clientX - retangulo.left;
        posicaoMouseY = e.clientY - retangulo.top;
        desenharImagens();
    });

    tela.addEventListener('mouseout', function() {
        contexto.clearRect(0, 0, tela.width, tela.height);
        desenharImagens();
    });

});

