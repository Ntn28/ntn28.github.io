// Effetto luce del mouse
const mouseLight = document.createElement('div');
mouseLight.className = 'mouse-light';
document.body.appendChild(mouseLight);

document.addEventListener('mousemove', (event) => {
    // Muovi la luce del mouse
    mouseLight.style.left = `${event.clientX}px`;
    mouseLight.style.top = `${event.clientY}px`;
    mouseLight.style.opacity = '1'; // Mostra la luce

    // Scorrimento della pagina con il mouse
    const scrollSpeed = 10;
    const windowHeight = window.innerHeight;
    const mouseY = event.clientY;

    if (mouseY < 50) {
        window.scrollBy(0, -scrollSpeed);
    } else if (mouseY > windowHeight - 50) {
        window.scrollBy(0, scrollSpeed);
    }
});

document.addEventListener('mouseout', () => {
    mouseLight.style.opacity = '0'; // Nascondi la luce quando il mouse esce dalla finestra
});

// Footer con movimento morbido
const footer = document.querySelector('footer');

document.querySelectorAll('.tab input[type="radio"]').forEach((radio) => {
    radio.addEventListener('click', () => {
        const content = radio.nextElementSibling.nextElementSibling;

        // Se la tab è già aperta, chiudila
        if (radio.checked && content.style.display === 'block') {
            content.style.animation = 'slideUp 0.5s ease-in-out';
            setTimeout(() => {
                content.style.display = 'none';
                radio.checked = false;
                footer.style.transform = 'translateY(0)'; // Riporta il footer in posizione
            }, 500);
        } else {
            // Chiudi tutte le altre tab
            document.querySelectorAll('.tab .content').forEach((otherContent) => {
                if (otherContent !== content) {
                    otherContent.style.animation = 'slideUp 0.5s ease-in-out';
                    setTimeout(() => {
                        otherContent.style.display = 'none';
                    }, 500);
                }
            });

            // Apri la tab corrente
            content.style.display = 'block';
            content.style.animation = 'slideDown 0.5s ease-in-out';
            footer.style.transform = 'translateY(20px)'; // Sposta il footer leggermente verso il basso
        }
    });
});

