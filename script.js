// Effetto background dinamico
const backgroundEffect = document.getElementById('background-effect');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // Animazione più lenta
    backgroundEffect.appendChild(particle);

    // Rimuovi la particella dopo che l'animazione è terminata
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

setInterval(createParticle, 1000); // Crea una nuova particella ogni secondo (meno frequente)

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
