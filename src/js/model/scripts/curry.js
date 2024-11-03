export const curry = function (fn) {
   return function curryed(...args) {
      if (args.length >= fn.length) {
         return fn(...args);
      }
      return curryed.bind(this, ...args);
   };
};
