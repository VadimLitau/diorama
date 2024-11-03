import rollupEach from "gulp-rollup-each";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import sourcemaps from "gulp-sourcemaps";

export const js = () => {
   return app.gulp
      .src(app.path.src.js)
      .pipe(app.plugins.if(app.isDev, sourcemaps.init()))
      .pipe(
         app.plugins.if(
            app.isDev,
            rollupEach({
               plugins: [nodeResolve(), commonjs()],
               isCache: true,
               output: {
                  format: "iife",
               },
            })
         )
      )
      .pipe(
         app.plugins.if(
            app.isBuild,
            rollupEach({
               plugins: [
                  nodeResolve(),
                  commonjs(),
                  babel({ babelHelpers: "bundled", exclude: "node_modules/**", presets: ["@babel/env"] }),
                  terser(),
               ],
               output: {
                  format: "iife",
               },
            })
         )
      )
      .pipe(
         app.plugins.replace(
            /(?<=src=|href=|srcset=)(['"`])(\.(\.)?\/)*(vendor\/)?(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"`]+(\/))?([^'"`]*)\1/gi,
            "$1./$5$7$8$1"
         )
      )
      .pipe(
         app.plugins.rename({
            extname: ".min.js",
         })
      )
      .pipe(app.plugins.if(app.isDev, sourcemaps.write()))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: "JS Error",
               message: "Error: <%= error.message %>. File: <%= file.relative %>!",
            })
         )
      )
      .pipe(app.plugins.if(app.isDev, app.plugins.browsersync.stream()));
};
