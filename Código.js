// En el archivo: Code.gs

function doGet() {
  // Esta función es obligatoria y se ejecuta cuando se accede a la URL.
  // Crea una salida HTML a partir de nuestro archivo 'index.html'.
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Mi Primera Aplicación Web') // Establece el título de la pestaña del navegador.
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // Permite que se incruste en otros sitios como Google Sites.
}