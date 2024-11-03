export const debounce = function (fn, delay = 250) {
   let timer;
   return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
   };
};
