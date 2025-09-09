function resizeMaps() {
  const imgs = document.querySelectorAll('img[usemap]');
  imgs.forEach(img => {
    const map = document.querySelector('map[name="' + img.useMap.slice(1) + '"]');
    if (!map) return;

    const originalWidth = img.naturalWidth;
    const originalHeight = img.naturalHeight;
    const scaleX = img.width / originalWidth;
    const scaleY = img.height / originalHeight;

    map.querySelectorAll('area').forEach(area => {
      let coords = area.dataset.coords.split(',').map(Number);
      let newCoords = coords.map((c, i) =>
        i % 2 === 0 ? Math.round(c * scaleX) : Math.round(c * scaleY)
      );
      area.coords = newCoords.join(',');
    });
  });
}

// Guardar coords originales cuando todo cargue
window.addEventListener('load', () => {
  document.querySelectorAll('area').forEach(area => {
    area.dataset.coords = area.coords;
  });
  resizeMaps();
});

// Reajustar al redimensionar ventana
window.addEventListener('resize', resizeMaps);
