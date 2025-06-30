document.addEventListener('DOMContentLoaded', function() {
    const park = document.getElementById('park');
    
    // Function to create a street light
    function createStreetLight() {
        const streetLight = document.createElement('div');
        streetLight.className = 'street-light';

        const pole = document.createElement('div');
        pole.className = 'pole';
        streetLight.appendChild(pole);

        const lights = document.createElement('div');
        lights.className = 'lights';
        streetLight.appendChild(lights);

        for (let i = 0; i < 2; i++) { // Two lights per pole
            const light = document.createElement('div');
            light.className = 'light';
            lights.appendChild(light);
        }

        streetLight.style.left = `${Math.random() * 100}%`; // Random horizontal position
        streetLight.style.top = `${Math.random() * 80}%`; // Random vertical position

        park.appendChild(streetLight);

        // Animate lights after adding
        const lightElements = streetLight.querySelectorAll('.light');
        lightElements.forEach(light => {
            light.style.animation = 'none';
            setTimeout(() => light.style.animation = 'blink 3s infinite', Math.random() * 1000); // Start animation with some delay
        });

        // Remove after some time for a dynamic effect
        setTimeout(() => {
            streetLight.remove();
        }, 15000); // Remove after 15 seconds
    }

    // Create initial street lights
    for (let i = 0; i < 5; i++) { // Adjust number as needed
        createStreetLight();
    }

    // Continuously add new lights for a dynamic effect
    setInterval(createStreetLight, 5000); // Adds a new light every 5 seconds
});