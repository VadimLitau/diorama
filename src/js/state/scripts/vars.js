// Основные переменные документа
export const $vars = {
   html: document.documentElement,
   htmlClasses: document.documentElement.classList,
   body: document.body,
   bodyClasses: document.body.classList,
   wrapper: document.getElementsByClassName("wrapper")[0],
   header: document.getElementsByTagName("header")[0] || document.getElementsByClassName("header")[0],
   main: document.getElementsByTagName("main")[0] || document.getElementsByClassName("main")[0],
   footer: document.getElementsByTagName("footer")[0] || document.getElementsByClassName("footer")[0],
   documentWidth: Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth
   ),
   documentHeight: Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
   ),
};
