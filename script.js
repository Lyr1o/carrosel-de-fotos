const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 300; // largura de cada imagem
    carousel.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});


function updateTimer() {
    // Data e hora inicial: 13/12 às 23:30
    const startTime = new Date("2024-12-13T23:30:00");

    // Hora atual
    const now = new Date();

    // Diferença em milissegundos
    const diff = now - startTime;


    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    
    document.getElementById("timer").textContent =
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualizar a cada 1 segundo
setInterval(updateTimer, 1000);


updateTimer();
