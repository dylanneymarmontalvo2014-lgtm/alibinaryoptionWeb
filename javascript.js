<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirección por Sistema Operativo</title>
  <script>
    function redirigirPorSO() {
      const ua = navigator.userAgent || navigator.vendor || window.opera;

      // iOS
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        window.location.href = "https://tusitio.com/ios";
      }
      // Android
      else if (/android/i.test(ua) || /Mobile/.test(ua)) {
        window.location.href = "https://www.youtube.com/?app=desktop&hl=es";
      }
      // Windows PC
      else if (/Win/i.test(ua)) {
        console.log("Estás en Windows (PC), no redirigido.");
      }
      // Mac
      else if (/Mac/i.test(ua)) {
        console.log("Estás en Mac (PC), no redirigido.");
      }
      // Otros
      else {
        console.log("Sistema operativo no detectado, no redirigido.");
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
