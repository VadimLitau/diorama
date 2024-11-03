// Плейсхолдер
export function placeholderWatch(sel) {
   const selector = sel || "[data-placeholder-form]",
      forms = document.querySelectorAll(selector);
   let placeholder = "";

   forms.forEach((form) => {
      form.addEventListener("focusin", (e) => {
         e.stopPropagation();
         const target = e.target;

         if (target && target.hasAttribute("placeholder")) {
            if (target.placeholder) {
               [placeholder, target.placeholder] = [target.placeholder, placeholder];
            }
         }
      });

      form.addEventListener("focusout", (e) => {
         e.stopPropagation();
         const target = e.target;

         if (target && target.hasAttribute("placeholder")) {
            if (placeholder) {
               [target.placeholder, placeholder] = [placeholder, target.placeholder];
            }
         }
      });
   });
}
