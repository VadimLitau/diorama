//Основной модуль
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js";
//Импорь общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//Передаем значения в глобальную переменную
global.app = {
   isBuild: process.argv.includes("--build"),
   isDev: !process.argv.includes("--build"),
   path: path,
   gulp: gulp,
   plugins: plugins,
};

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { deploy } from "./gulp/tasks/deploy.js";
import { imgwebp } from "./gulp/tasks/imgwebp.js";
import { imgmin } from "./gulp/tasks/imgmin.js";
import { favicon } from "./gulp/tasks/favicon.js";
import { vendorcss } from "./gulp/tasks/vendorcss.js";
import { vendorjs } from "./gulp/tasks/vendorjs.js";
import { vendorfonts } from "./gulp/tasks/vendorfonts.js";
import { vendorimages } from "./gulp/tasks/vendorimages.js";
import { vendoraudio } from "./gulp/tasks/vendoraudio.js";
import { vendorvideo } from "./gulp/tasks/vendorvideo.js";
import { htmlValidator } from "./gulp/tasks/htmlValidator.js";
import { gitignore } from "./gulp/tasks/gitignore.js";

function watcher() {
   gulp.watch(path.watch.files, { usePolling: true }, copy);
   gulp.watch(path.watch.html, { usePolling: true }, html);
   gulp.watch(path.watch.scss, { usePolling: true }, scss);
   gulp.watch(path.watch.js, { usePolling: true }, js);
   gulp.watch(path.watch.images, { usePolling: true }, images);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Доолнительные параллельные задачи
const otherTasks = gulp.parallel(vendorcss, vendorjs, vendorfonts, vendorimages, vendoraudio, vendorvideo);

//Основные параллельные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, otherTasks, html, scss, js, images));

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gitignore, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(zip);
const deployFTP = gulp.series(ftp);

//Экспорт отдельных задач
export { svgSprive };
export { dev };
export { build };
export { deployZIP };
export { deployFTP };
export { deploy };
export { fonts };
export { images };
export { scss };
export { js };
export { server };
export { imgwebp };
export { imgmin };
export { favicon };
export { htmlValidator };
export { gitignore };

//Выполнение сценария по умолчанию
gulp.task("default", dev);
