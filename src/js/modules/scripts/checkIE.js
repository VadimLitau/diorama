// Определение браузера IE
export function isIE() {
   return window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
}
