function resizeMap() {
  const img = document.querySelector('img[usemap]');
  const map = document.querySelector('map[name="' + img.useMap.slice(1) + '"]');
  const originalWidth = 1200; // ancho original de tu imagen
  const scale = img.width / originalWidth;

  map.querySelectorAll('area').forEach(area => {
    let coords = area.dataset.coords.split(',').map(Number);
    coords = coords.map(c => Math.round(c * scale));
    area.coords = coords.join(',');
  });
}

// Guardar las coordenadas originales
document.querySelectorAll('area').forEach(area => {
  area.dataset.coords = area.coords;
});

window.addEventListener('resize', resizeMap);
window.addEventListener('load', resizeMap);
