document.addEventListener("DOMContentLoaded", () => {
    // Assegna automaticamente le immagini ai titoli
    document.querySelectorAll(".tab").forEach(tab => {
        let title = tab.getAttribute("data-title").toLowerCase();
        let imageUrl = `images/${title}.png`;

        // Aggiunge l'immagine blurrata alla tab
        let blurredBg = tab.querySelector(".blurred-bg");
        blurredBg.style.backgroundImage = `url('${imageUrl}')`;

        // Aggiunge l'immagine di sfondo alla descrizione
        let content = tab.querySelector(".content");
        content.style.backgroundImage = `url('${imageUrl}')`;
    });

    // Effetto particelle di sfondo
    const backgroundEffect = document.getElementById('background-effect');

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
        backgroundEffect.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    setInterval(createParticle, 1500);
});

