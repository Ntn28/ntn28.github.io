// Effetto luce che segue il mouse
const backgroundEffect = document.getElementById('background-effect');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    backgroundEffect.style.setProperty('--mouse-x', `${mouseX}px`);
    backgroundEffect.style.setProperty('--mouse-y', `${mouseY}px`);
});

// Carica le immagini in base al nome della tab
document.querySelectorAll('.tab-label, .content').forEach((element) => {
    const imageName = element.getAttribute('data-image');
    if (imageName) {
        element.style.backgroundImage = `url('images/${imageName}')`;
    }
});

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

