document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('stars');
    const starContainer2 = document.getElementById('stars2');

    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starContainer.appendChild(star);

        const star2 = document.createElement('div');
        star2.classList.add('star2');
        star2.style.top = `${Math.random() * 100}vh`;
        star2.style.left = `${Math.random() * 100}vw`;
        starContainer2.appendChild(star2);
    }

    // Animação do Cometa
    function animateComet() {
        const comet = document.getElementById('comet');
        let positionX = 100;  // Start position
        let positionY = 50;   // Start position

        function moveComet() {
            positionX -= 1;  // Move left
            positionY -= 0.6;  // Move up slightly
            if (positionX < -10) {
                positionX = 100;  // Reset position when out of view
                positionY = Math.random() * 100;  // Randomize Y position
            }
            comet.style.left = `${positionX}%`;
            comet.style.top = `${positionY}%`;
            requestAnimationFrame(moveComet);
        }

        moveComet();
    }

    animateComet();
});
