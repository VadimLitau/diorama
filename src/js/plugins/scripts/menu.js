// Author: Binarion

export function menu() {
   const burger = document.querySelector("[data-burger]"),
      menu = document.querySelector("[data-menu]");
   let activePoint;

   try {
      if (burger) {
         burger.setAttribute("role", "button");
         ariaClosed(burger, "меню");

         burger.onclick = (e) => {
            e.stopPropagation();
            burger.classList.toggle("active");

            if (burger.classList.contains("active")) {
               ariaOpened(burger, "меню");
            } else {
               ariaClosed(burger, "меню");
            }

            if (menu) {
               menu.classList.toggle("active");
               document.body.classList.toggle("lock");
               document.body.style.overflow = document.body.style.overflow != "hidden" ? "hidden" : "";
            }
         };
      } else {
         throw new Error("Элемента с атрибутом data-burger не существует!");
      }

      if (menu) {
         const items = menu.querySelectorAll("[data-menu-item]"),
            itemsLength = items.length;

         if (burger) {
            if (!menu.id) {
               burger.setAttribute("aria-controls", "menu");
               menu.id = "menu";
            } else {
               burger.setAttribute("aria-controls", menu.id);
            }

            if (!menu.classList.length) {
               menu.classList.add(menu.id);
            }
         } else {
            throw new Error("Элемента с атрибутом data-burger не существует!");
         }

         if (itemsLength) {
            menu.onclick = (e) => {
               e.stopPropagation();
               const point = e.target.closest("[data-menu-item]"),
                  link = e.target.closest('a[href^="#"]:not(a[href="#"])');

               if (link) {
                  e.preventDefault();
                  const id = link.getAttribute("href").substring(1),
                     scrollBlock = document.getElementById(id);

                  if (scrollBlock) {
                     scrollBlock.scrollIntoView({ behavior: "smooth" });
                  }
               }

               if (point) {
                  if (point != activePoint) {
                     if (activePoint) {
                        activePoint.classList.remove("active");
                     }

                     point.classList.add("active");
                     activePoint = point;
                  }

                  if (menu.classList.contains("active")) {
                     burger.click();
                  }
               }
            };
         } else {
            console.error("Добавьте элементам меню атрибут data-menu-item!");
         }
      } else {
         console.error("Добавьте блоку с меню атрибут data-menu!");
      }

      const burgerMedia = window.matchMedia("(min-width: 769px)");
      burgerMedia.onchange = burgerMediaChange;
      burgerMediaChange(burgerMedia);

      function burgerMediaChange(e) {
         if (burger.classList.contains("active") && menu.classList.contains("active") && e.matches) {
            burger.click();
         }
      }
   } catch (err) {
      console.error(err);
   }
}

function ariaOpened(element, string) {
   element.setAttribute("aria-expanded", "true");
   element.setAttribute("aria-label", "Закрыть " + string);
}

function ariaClosed(element, string) {
   element.setAttribute("aria-expanded", "false");
   element.setAttribute("aria-label", "Открыть " + string);
}
