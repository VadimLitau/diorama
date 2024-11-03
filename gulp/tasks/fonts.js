import fs from "fs";
import fonter from "gulp-fonter-fix";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
   // Ищем файлы шрифтов .otf
   return (
      app.gulp
         .src(`${app.path.srcFolder}/fonts/*.otf`, {})
         // Конвертируем в .ttf
         .pipe(
            fonter({
               formats: ["ttf"],
            })
         )
         // Выгружаем в исходную папку
         .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
         .pipe(
            app.plugins.plumber(
               app.plugins.notify.onError({
                  title: "FONTS",
                  message: "Error: <%= error.message %>. File: <%= file.relative %>!",
               })
            )
         )
   );
};

export const ttfToWoff = () => {
   // Ищем файлы шрифтов .ttf
   return (
      app.gulp
         .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
         // Конвертируем в .woff
         .pipe(
            fonter({
               formats: ["woff"],
            })
         )
         // Заменяем пробелы в имени файла на символ _
         .pipe(
            app.plugins.rename((path) => {
               return {
                  dirname: path.dirname,
                  basename: correctionPath(path.basename),
                  extname: path.extname,
               };
            })
         )
         // Выгружаем в папку с результатом
         .pipe(app.gulp.dest(`${app.path.build.fonts}`))
         // Ищем файлы шрифтов .ttf
         .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
         // Конвертируем в .woff2
         .pipe(ttf2woff2())
         // Заменяем пробелы в имени файла на символ _
         .pipe(
            app.plugins.rename((path) => {
               return {
                  dirname: path.dirname,
                  basename: correctionPath(path.basename),
                  extname: path.extname,
               };
            })
         )
         // Выгружаем в папку с результатом
         .pipe(app.gulp.dest(`${app.path.build.fonts}`))
         .pipe(
            app.plugins.plumber(
               app.plugins.notify.onError({
                  title: "FONTS",
                  message: "Error: <%= error.message %>",
               })
            )
         )
   );
};

export const fontsStyle = () => {
   // Файл стилей подключения шрифтов
   let fontsFile = `${app.path.srcFolder}/scss/components/layout/_fonts.scss`;
   // Проверяем существуют ли файлы шрифтов
   fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
      if (fontsFiles) {
         // Проверяем существует ли файл стилей для подключения шрифтов
         if (!fs.existsSync(fontsFile)) {
            // Если файла нет, создаем его
            fs.writeFile(fontsFile, "", cb);

            let newFileOnly;

            for (var i = 0; i < fontsFiles.length; i++) {
               // Записываем подключения шрифтов в файл стилей
               let fontFileName = fontsFiles[i].split(".")[0];
               if (newFileOnly !== fontFileName) {
                  let baseFontName = fontFileName.split("-")[0] || fontFileName;
                  let fontName = correctionPath(baseFontName);
                  let fontWeight = fontFileName.split("-")[1] || fontFileName;
                  let fontNameForStyle = fontWeight;
                  let fontStyle = "normal";

                  if (fontWeight.toLowerCase().includes("thin")) {
                     fontWeight = 100;
                  } else if (fontWeight.toLowerCase().includes("extralight")) {
                     fontWeight = 200;
                  } else if (fontWeight.toLowerCase().includes("light")) {
                     fontWeight = 300;
                  } else if (fontWeight.toLowerCase().includes("medium")) {
                     fontWeight = 500;
                  } else if (fontWeight.toLowerCase().includes("semibold")) {
                     fontWeight = 600;
                  } else if (fontWeight.toLowerCase().includes("bold") && !fontWeight.toLowerCase().includes("extrabold")) {
                     fontWeight = 700;
                  } else if (fontWeight.toLowerCase().includes("extrabold") || fontWeight.toLowerCase().includes("heavy")) {
                     fontWeight = 800;
                  } else if (fontWeight.toLowerCase().includes("black")) {
                     fontWeight = 900;
                  } else {
                     fontWeight = 400;
                  }

                  // проверка на стиль
                  if (fontNameForStyle.toLowerCase().includes("italic")) {
                     fontStyle = "italic";
                  } else if (fontNameForStyle.toLowerCase().includes("oblique")) {
                     fontStyle = "oblique";
                  }

                  fs.appendFile(
                     fontsFile,
                     `@font-face {\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n}\r\n`,
                     cb
                  );
                  newFileOnly = fontFileName;
               }
            }
         } else {
            // Если файл есть, выводим сообщение
            console.log("Файл scss/components/layout/_fonts.scss уже существует. Для обновления файла нужно его удалить!");
         }
      }
   });

   return app.gulp.src(`${app.path.srcFolder}`);
   function cb() {}
};

function correctionPath(path) {
   return path.split(" ").filter(Boolean).join("_");
}
