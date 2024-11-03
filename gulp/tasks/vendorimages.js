export const vendorimages = () => {
   return app.gulp
      .src(app.path.src.vendorimages)
      .pipe(app.plugins.newer(app.path.build.images))
      .pipe(app.gulp.dest(app.path.build.images));
};
