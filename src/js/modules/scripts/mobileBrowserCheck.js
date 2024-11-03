// Определение мобильного браузера
export const isMobileBrowser = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   all: function () {
      return (
         isMobileBrowser.Android() ||
         isMobileBrowser.BlackBerry() ||
         isMobileBrowser.iOS() ||
         isMobileBrowser.Opera() ||
         isMobileBrowser.Windows()
      );
   },
};
