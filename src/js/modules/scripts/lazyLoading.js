// Ленивая загрузка графики
export function lazyLoading(selector) {
   const container = document.querySelector(selector),
      images = container.querySelectorAll("img");

   if (!!window.IntersectionObserver) {
      const opt = {
            rootMargin: "200px 0px 200px 0px",
            threshold: 0,
         },
         myLoader = (ent, obs) => {
            ent.forEach((en) => {
               if (en.isIntersecting) {
                  if (en.target.dataset.src) {
                     en.target.src = en.target.dataset.src;
                     obs.unobserve(en.target);
                  }
               }
            });
         },
         observer = new IntersectionObserver(myLoader, opt);

      images.forEach((it) => observer.observe(it));
   } else {
      images.forEach((it) => {
         if (it.dataset.src) {
            it.src = it.dataset.src;
         }
      });
   }
}
