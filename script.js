/* Stile generale */
body {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #1e1e1e;
}

header {
    background-color: rgba(18, 18, 18, 0.8);
    padding: 20px;
    text-align: center;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 2;
}

h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 700;
    color: #007BFF;
}

.cv-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
}

.cv-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

.cv-button i {
    font-size: 1.2rem;
}

/* Stile tab */
.tabs {
    margin: 20px auto;
    max-width: 800px;
    position: relative;
    z-index: 2;
}

.tab {
    position: relative;
    margin-bottom: 10px;
    background-color: rgba(44, 44, 44, 0.8);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tab:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.tab input[type="radio"] {
    display: none;
}

.tab label {
    display: block;
    color: white;
    padding: 15px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
    background-size: cover;
    background-position: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.tab label:hover {
    opacity: 0.9;
}

.tab .content {
    display: none;
    padding: 20px;
    background-size: cover;
    background-position: center;
    border-radius: 0 0 10px 10px;
    animation: slideDown 0.5s ease-in-out;
    position: relative;
    z-index: 0;
}

@keyframes slideDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    50% {
        opacity: 1;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    50% {
        opacity: 0.5;
        transform: translateY(10px);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
}

.tab input[type="radio"]:checked + label {
    border-radius: 10px 10px 0 0;
}

.tab input[type="radio"]:checked + label + .content {
    display: block;
}

.tab input[type="radio"]:not(:checked) + label + .content {
    animation: slideUp 0.5s ease-in-out;
}

.details {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.github-link {
    display: inline-block;
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
}

.github-link:hover {
    background-color: #0056b3;
}

.github-link i {
    margin-right: 10px;
}

video {
    max-width: 300px;
    border-radius: 10px;
    background-color: #000;
}

p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    flex: 1;
}

p strong {
    font-weight: 700;
    color: #007BFF;
}

.contributo {
    display: none;
}

/* Footer */
footer {
    background-color: rgba(18, 18, 18, 0.8);
    color: #ffffff;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
}

/* Effetto background dinamico */
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
