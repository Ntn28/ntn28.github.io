// Effetto particelle per il background
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#007BFF",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#007BFF",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

// Gestione apertura/chiusura delle tab
document.querySelectorAll('.tab input[type="radio"]').forEach((radio) => {
    radio.addEventListener('click', () => {
        const content = radio.nextElementSibling.nextElementSibling;

        // Chiudi tutte le altre tab
        document.querySelectorAll('.tab .content').forEach((otherContent) => {
            if (otherContent !== content) {
                otherContent.style.display = 'none';
            }
        });

        // Apri/chiudi la tab corrente
        if (radio.checked) {
            if (content.style.display === 'block') {
                content.style.display = 'none';
                radio.checked = false;
            } else {
                content.style.display = 'block';
            }
        } else {
            content.style.display = 'none';
        }
    });
});

// Chiudi la tab quando si clicca fuori
document.addEventListener('click', (event) => {
    const tabs = document.querySelectorAll('.tab');
    let isClickInsideTab = false;

    tabs.forEach((tab) => {
        if (tab.contains(event.target)) {
            isClickInsideTab = true;
        }
    });

    if (!isClickInsideTab) {
        document.querySelectorAll('.tab .content').forEach((content) => {
            content.style.display = 'none';
        });
        document.querySelectorAll('.tab input[type="radio"]').forEach((radio) => {
            radio.checked = false;
        });
    }
});