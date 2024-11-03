import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Вывод ошибок
import browsersync from "browser-sync"; //Локальный сервер
import newer from "gulp-newer"; // Проверка обновления
import ifPlugin from "gulp-if"; // Условное ветвление
import typograf from "gulp-typograf"; // Типограф
import imagemin from "gulp-imagemin"; // Сжатие графики
import imagewebp from "imagemin-webp"; // Конвертация графики в webp
import rename from "gulp-rename"; // Изменение расширения файла
import { formatHTML } from "gulp-format-html"; // Форматировщик разметки
import { htmlValidator } from "gulp-w3c-html-validator"; // Валидатор html

export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   browsersync: browsersync,
   newer: newer,
   if: ifPlugin,
   typograf: typograf,
   formatHTML: formatHTML,
   htmlValidator: htmlValidator,
   imagewebp: imagewebp,
   imagemin: imagemin,
   rename: rename,
};
