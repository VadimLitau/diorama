export const vendorvideo = () => {
   return app.gulp
      .src(app.path.src.vendorvideo)
      .pipe(app.plugins.newer(app.path.build.video))
      .pipe(app.gulp.dest(app.path.build.video));
};
