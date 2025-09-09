<script>
function resizeMap() {
  const img = document.querySelector('img[usemap]');
  if (!img) return;

  const map = document.querySelector('map[name="' + img.useMap.slice(1) + '"]');

  // Dimensiones originales de la imagen
  const originalWidth = img.naturalWidth;
  const originalHeight = img.naturalHeight;

  // Escalas actuales
  const scaleX = img.width / originalWidth;
  const scaleY = img.height / originalHeight;

  map.querySelectorAll('area').forEach(area => {
    let coords = area.dataset.coords.split(',').map(Number);
    let newCoords = coords.map((c, i) =>
      i % 2 === 0 ? Math.round(c * scaleX) : Math.round(c * scaleY)
    );
    area.coords = newCoords.join(',');
  });
}

// Guardar coords originales al cargar
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('area').forEach(area => {
    area.dataset.coords = area.coords;
  });
  resizeMap();
});

// Ajustar al redimensionar
window.addEventListener('resize', resizeMap);
</script>
