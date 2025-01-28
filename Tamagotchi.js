let health = 100;
const healthDisplay = document.getElementById('health');
const earthImage = document.getElementById('earth');

function takeAction(action) {
    if (health <= 0) {
        alert('The planet has exploded. Game Over!');
        return;
    }

    if (action === 'climate') {
        health += 10;
    } else if (action === 'poverty') {
        health += 5;
    } else if (action === 'education') {
        health += 7;
    }

    if (health > 100) {
        health = 100;
    }

    healthDisplay.textContent = health;

    // Simulate the doomsday clock
    if (health <= 0) {
        earthImage.src = 'explosion.png';
        earthImage.style.transform = 'scale(1.2)';
    } else {
        earthImage.style.transform = 'scale(1)';
    }
}

// Simulate neglecting the planet
setInterval(() => {
    if (health > 0) {
        health -= 2;
        healthDisplay.textContent = health;
    }

    if (health <= 0) {
        earthImage.src = 'explosion.png';
        earthImage.style.transform = 'scale(1.2)';
    }
}, 10000);
