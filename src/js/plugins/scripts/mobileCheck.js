// Определение мобильных устройств
import { $vars } from "../../state";

export const mobileCheck = () => {
   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

   if (/android/i.test(userAgent)) {
      if (!$vars.html.classList.contains("page--android")) {
         $vars.html.classList.add("page--android");
      }
      return "Android";
   }

   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      if (!$vars.html.classList.contains("page--ios")) {
         $vars.html.classList.add("page--ios");
      }
      return "iOS";
   }

   if (/IEMobile/i.test(userAgent)) {
      if (!$vars.html.classList.contains("page--windows-mobile")) {
         $vars.html.classList.add("page--windows-mobile");
      }
      return "Windows Mobile";
   }

   if (/BlackBerry/i.test(userAgent)) {
      if (!$vars.html.classList.contains("page--blackberry")) {
         $vars.html.classList.add("page--blackberry");
      }
      return "BlackBerry";
   }

   if (/Opera Mini/i.test(userAgent)) {
      if (!$vars.html.classList.contains("page--phone")) {
         $vars.html.classList.add("page--phone");
      }
      return "Phone";
   }

   if (!$vars.html.classList.contains("pc")) {
      $vars.html.classList.add("pc");
   }
   return null;
};
