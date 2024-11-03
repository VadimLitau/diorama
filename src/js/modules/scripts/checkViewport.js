// Определение вьюпорта
export const isMobile = () => (window.matchMedia ? window.matchMedia("(max-width: 768px)").matches : !!(window.innerWidth <= 768));

export const isTablet = () =>
   window.matchMedia
      ? window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches
      : !!(window.innerWidth >= 769 && window.innerWidth <= 1024);

export const isDesktop = () =>
   window.matchMedia ? window.matchMedia("(min-width: 1025px)").matches : !!(window.innerWidth > 1025);

export const isOverMobile = () =>
   window.matchMedia ? window.matchMedia("(min-width: 769px)").matches : !!(window.innerWidth >= 769);
