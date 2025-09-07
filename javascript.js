<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirección según dispositivo</title>
  <script>
    function redirigirPorDispositivo() {
      const ancho = window.innerWidth;

      if (ancho <= 600) {
        // Celular
        window.location.href = "https://www.youtube.com/?app=desktop&hl=es";
      } else if (ancho <= 1024) {
        // Tablet
        window.location.href = "https://web.whatsapp.com/";
      } else {
        // PC -> no hace nada, se queda en la misma web
        console.log("Estás en PC, no redirigido.");
      }
    }

    window.onload = redirigirPorDispositivo;
  </script>
</head>
<body>
  <h1>Bienvenido</h1>
  <p>Si entras desde Celular o Tablet, serás redirigido automáticamente.</p>
</body>
</html>
