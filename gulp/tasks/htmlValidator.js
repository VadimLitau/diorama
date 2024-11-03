export const htmlValidator = () => {
   return app.gulp
      .src(`${app.path.buildFolder}/*.html`)
      .pipe(app.plugins.htmlValidator.analyzer({ ignoreLevel: "warning" }))
      .pipe(app.plugins.htmlValidator.reporter())
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "VALIDATOR",
               message: "Error: <%= error.message %>. File: <%= file.relative %>!",
            })
         )
      );
};
