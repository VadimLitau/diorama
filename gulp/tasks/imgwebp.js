export const imgwebp = () => {
   return app.gulp
      .src(app.path.src.images)
      .pipe(
         app.plugins.imagemin([
            app.plugins.imagewebp({
               quality: 83,
            }),
         ])
      )
      .pipe(app.plugins.rename({ extname: ".webp" }))
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "IMGWEBP",
               message: "Error: <%= error.message %>. File: <%= file.relative %>!",
            })
         )
      );
};
