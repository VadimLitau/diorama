export const vendorfonts = () => {
   return app.gulp
      .src(app.path.src.vendorfonts)
      .pipe(app.plugins.newer(app.path.build.fonts))
      .pipe(app.gulp.dest(app.path.build.fonts));
};
