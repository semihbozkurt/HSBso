 const mapElement = document.getElementById('map-container');
    
    // Initialize Panzoom
    const pz = Panzoom(mapElement, {
        maxScale: 5,
        minScale: 1,
        step: 0.3,
        contain: 'outside' // Keeps the map from flying off-screen
    });

    // Enable zooming with the mouse wheel
    mapElement.parentElement.addEventListener('wheel', (event) => {
    // Sayfanın komple büyümesini engelle
        event.preventDefault();
        panzoom.zoomWithWheel(event);
        
    }, {passive: false});

    // Click event for the countries
    const regions = document.querySelectorAll('#svg1 path');
    regions.forEach(region => {
        region.addEventListener('click', (e) => {
            console.log("Clicked on:", region.id);
            
            // Logic to open the right-side panel
            const panel = document.getElementById('info-panel');
            panel.classList.add('open'); // We'll set 'open' to 'right: 0' in CSS
            
            // Optional: Zoom into the clicked region
            pz.zoomToPoint(2, { clientX: e.clientX, clientY: e.clientY });
        });
    });

    mapElement.addEventListener('mousedown', (e) => {
    // Sürükleme başladığında imleci 'grabbing' yapalım
    mapElement.style.cursor = 'grabbing';
});

    window.addEventListener('mouseup', () => {
    mapElement.style.cursor = 'grab';
});