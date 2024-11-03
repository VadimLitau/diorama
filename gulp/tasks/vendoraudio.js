export const vendoraudio = () => {
   return app.gulp
      .src(app.path.src.vendoraudio)
      .pipe(app.plugins.newer(app.path.build.audio))
      .pipe(app.gulp.dest(app.path.build.audio));
};
