import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-web-images-html";
import versionNumber from "gulp-version-number";

export const html = () => {
   return app.gulp
      .src(app.path.src.html)
      .pipe(fileInclude())
      .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg({ mode: "webp" })))
      .pipe(app.plugins.replace(/<img(?:.|\n|\r)*?>/g, (m) => m.replace(/\r?\n|\r/g, "").replace(/(\s){2,}/g, "$1")))
      .pipe(
         app.plugins.replace(
            /(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(vendor\/)?(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
            "$1./$5$7$8$1"
         )
      )
      .pipe(
         app.plugins.if(
            app.isBuild,
            versionNumber({
               value: "%DT%",
               append: {
                  key: "_v",
                  cover: 0,
                  to: ["css", "js"],
               },
               output: {
                  file: "gulp/version.json",
               },
            })
         )
      )
      .pipe(
         app.plugins.if(
            app.isBuild,
            app.plugins.typograf({
               locale: ["ru", "en-US"],
               htmlEntity: { type: "digit" },
               safeTags: [
                  ["<\\?php", "\\?>"],
                  ["<no-typography>", "</no-typography>"],
               ],
            })
         )
      )
      .pipe(app.plugins.if(app.isBuild, app.plugins.formatHTML({ indent_size: 3 })))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "HTML Error",
               message: "Error: <%= error.message %>. File: <%= file.relative %>!",
            })
         )
      )
      .pipe(app.plugins.if(app.isDev, app.plugins.browsersync.stream()));
};
