export const throttle = function (fn, delay = 250) {
   let isWaiting = false,
      savedArgs = null,
      savedThis = null;
   return function wrapper(...args) {
      if (isWaiting) {
         savedArgs = args;
         savedThis = this;
         return;
      }

      fn.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
         isWaiting = false;

         if (savedThis) {
            wrapper.apply(savedThis, savedArgs);
            savedThis = null;
            savedArgs = null;
         }
      }, delay);
   };
};
