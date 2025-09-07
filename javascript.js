<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirección por dispositivo</title>
  <script>
    function redirigirPorDispositivo() {
      const ua = navigator.userAgent || navigator.vendor || window.opera;

      // iOS
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        window.location.href = "https://tusitio.com/ios";
      }
      // Android
      else if (/android/i.test(ua)) {
        // Detectar tablet por tamaño de pantalla
        if (Math.min(window.screen.width, window.screen.height) >= 768) {
          window.location.href = "https://www.youtube.com/?app=desktop&hl=es";
        } else {
          window.location.href = "http
