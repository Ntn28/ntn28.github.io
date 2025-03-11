// Effetto onde interattive
const backgroundEffect = document.getElementById('background-effect');

function createWave() {
    const wave = document.createElement('div');
    wave.className = 'wave';
    backgroundEffect.appendChild(wave);

    // Rimuovi l'onda dopo che l'animazione è terminata
    wave.addEventListener('animationend', () => {
        wave.remove();
    });
}

setInterval(createWave, 5000); // Crea una nuova onda ogni 5 secondi

// Gestione apertura/chiusura delle tab
document.querySelectorAll('.tab input[type="radio"]').forEach((radio) => {
    radio.addEventListener('click', () => {
        const content = radio.nextElementSibling.nextElementSibling;

        // Se la tab è già aperta, chiudila
        if (radio.checked && content.style.display === 'block') {
            content.style.animation = 'slideUp 0.5s ease-in-out';
            setTimeout(() => {
                content.style.display = 'none';
                radio.checked = false;
            }, 500); // Durata dell'animazione
        } else {
            // Chiudi tutte le altre tab
            document.querySelectorAll('.tab .content').forEach((otherContent) => {
                if (otherContent !== content) {
                    otherContent.style.animation = 'slideUp 0.5s ease-in-out';
                    setTimeout(() => {
                        otherContent.style.display = 'none';
                    }, 500); // Durata dell'animazione
                }
            });

            // Apri la tab corrente
            content.style.display = 'block';
            content.style.animation = 'slideDown 0.5s ease-in-out';
        }
    });
});

// Scorrimento della pagina con il mouse
document.addEventListener('mousemove', (event) => {
    const scrollSpeed = 10; // Velocità di scorrimento
    const windowHeight = window.innerHeight;
    const mouseY = event.clientY;

    // Se il mouse è nella parte superiore della finestra, scorri verso l'alto
    if (mouseY < 50) {
        window.scrollBy(0, -scrollSpeed);
    }
    // Se il mouse è nella parte inferiore della finestra, scorri verso il basso
    else if (mouseY > windowHeight - 50) {
        window.scrollBy(0, scrollSpeed);
    }
});
