// Effetto background dinamico
const backgroundEffect = document.getElementById('background-effect');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    backgroundEffect.appendChild(particle);

    // Rimuovi la particella dopo che l'animazione è terminata
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

setInterval(createParticle, 500); // Crea una nuova particella ogni 500ms

// Effetto luce del mouse
const mouseLight = document.createElement('div');
mouseLight.className = 'mouse-light';
document.body.appendChild(mouseLight);

document.addEventListener('mousemove', (event) => {
    // Muovi la luce del mouse
    mouseLight.style.left = `${event.clientX}px`;
    mouseLight.style.top = `${event.clientY}px`;
    mouseLight.style.opacity = '1'; // Mostra la luce

    // Nascondi la luce quando il mouse è fermo
    clearTimeout(window.mouseLightTimeout);
    window.mouseLightTimeout = setTimeout(() => {
        mouseLight.style.opacity = '0';
    }, 100);
});

// Gestione apertura/chiusura delle tab con movimento morbido del footer
document.querySelectorAll('.tab input[type="radio"]').forEach((radio) => {
    radio.addEventListener('click', () => {
        const content = radio.nextElementSibling.nextElementSibling;
        const footer = document.querySelector('footer');

        // Se la tab è già aperta, chiudila
        if (radio.checked && content.style.display === 'block') {
            content.style.animation = 'slideUp 0.5s ease-in-out';
            setTimeout(() => {
                content.style.display = 'none';
                radio.checked = false;
                // Riporta il footer alla posizione originale
                footer.style.transform = 'translateY(0)';
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

            // Sposta il footer verso il basso per evitare sovrapposizioni
            footer.style.transform = 'translateY(20px)';
        }
    });
});
