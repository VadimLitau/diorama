import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css"; //Сжатие CSS-файла
import webImagesCSS from "gulp-web-images-css"; //Вывод WEBP-изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление вендорных префиксов

const sass = gulpSass(dartSass);

export const scss = () => {
   return (
      app.gulp
         .src(app.path.src.scss, { sourcemaps: true })
         .pipe(
            sass({
               outputStyle: "expanded",
               silenceDeprecations: ["legacy-js-api"],
            })
         )
         .pipe(app.plugins.replace(/(url\()(['"]{1}(?!data))(.+)\2(\))/gi, '$1"$3"$4'))
         .pipe(
            app.plugins.replace(
               /(['"]?)(\.\.\/)+(vendor\/)?(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
               "$1$2$4$6$7$1"
            )
         )
         .pipe(
            app.plugins.if(
               app.isBuild,
               webImagesCSS({
                  mode: "webp",
               })
            )
         )
         .pipe(
            autoprefixer({
               grid: true,
               overrideBrowserslist: ["last 5 versions"],
               cascade: true,
            })
         )
         //Раскоментировать при необходимости
         // .pipe(app.gulp.dest(app.path.build.css))
         .pipe(app.plugins.if(app.isBuild, cleanCss()))
         .pipe(
            app.plugins.rename({
               extname: ".min.css",
            })
         )
         .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.css, { sourcemaps: "." })))
         .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.css)))
         .pipe(
            app.plugins.plumber(
               app.plugins.notify.onError({
                  title: "SCSS Error",
                  message: "Error: <%= error.message %>. File: <%= file.relative %>!",
               })
            )
         )
         .pipe(app.plugins.if(app.isDev, app.plugins.browsersync.stream()))
   );
};
