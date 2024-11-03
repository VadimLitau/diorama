export function setNavigationActiveClass() {
   const locationPath = window.location.pathname;
   const locationHref = window.location.href;
   const navLinks = document.querySelectorAll("nav ul > li > a");

   navLinks.forEach((link) => {
      const hrefContent = link.getAttribute("href");
      link.classList.toggle("active", link.href === locationHref || locationPath === hrefContent);
   });
}
