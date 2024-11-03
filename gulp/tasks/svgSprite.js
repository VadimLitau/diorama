import svgSprite from "gulp-svg-sprite";

export const svgSprive = () => {
   return app.gulp
      .src(`${app.path.src.svgicons}`, {})
      .pipe(
         svgSprite({
            mode: {
               symbol: {
                  sprite: `../icons.svg`,
                  // Создавать страницу с перечнем иконок
                  example: false,
               },
               stack: {
                  sprite: `../icons-stack.svg`,
                  // Создавать страницу с перечнем иконок
                  example: false,
               },
            },
            shape: {
               transform: [
                  {
                     svgo: {
                        plugins: [
                           {
                              name: "removeAttrs",
                              params: {
                                 attrs: "(fill|stroke|xmlns|width|height)",
                              },
                           },
                        ],
                     },
                  },
               ],
            },
         })
      )
      .pipe(app.gulp.dest(`${app.path.build.images}`))
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "SVG",
               message: "Error: <%= error.message %>. File: <%= file.relative %>!",
            })
         )
      );
};
