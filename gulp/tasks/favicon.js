import favicons from "gulp-favicons";
import filter from "gulp-filter";

export const favicon = () => {
   return app.gulp
      .src(app.path.src.favicon)
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(
         favicons({
            icons: {
               favicons: true,
               appleIcon: true,
               android: true,
               windows: false,
               yandex: false,
               coast: false,
               firefox: false,
               appleStartup: false,
            },
            path: "images/favicons/",
            lang: "ru",
            theme_color: "#D9D9D9",
            background: "#D9D9D9",
         })
      )
      .pipe(app.gulp.dest(app.path.build.favicon))
      .pipe(filter(["favicon.ico", "apple-touch-icon.png", "manifest.json"]))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "FAVICON",
               message: "Error: <%= error.message %>. File: <%= file.relative %>!",
            })
         )
      );
};
