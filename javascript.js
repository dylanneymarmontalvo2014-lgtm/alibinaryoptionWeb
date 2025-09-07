<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirección por Sistema Operativo</title>
  <script>
    function redirigirPorSO() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Detectar iOS
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://tusitio.com/ios";
      }
      // Detectar Android
      else if (/android/i.test(userAgent)) {
        window.location.href = "hhttps://www.youtube.com/?app=desktop&hl=es";
      }
      // Detectar Windows
      else if (/Win/i.test(userAgent)) {
        console.log("Estás en Windows (PC), no redirigido.");
      }
      // Detectar Mac
      else if (/Mac/i.test(userAgent)) {
        console.log("Estás en Mac (PC), no redirigido.");
      }
      // Otros casos
      else {
        console.log("No se detecta SO conocido, no redirigido.");
      }
    }

    window.onload = redirigirPorSO;
  </script>
</head>
<body>
  <h1>Bienvenido</h1>
  <p>Si estás en iOS o Android, serás redirigido automáticamente.</p>
</body>
</html>
