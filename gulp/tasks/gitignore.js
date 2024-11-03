import fs from "fs";

export const gitignore = () => {
   if (!fs.existsSync(".gitignore")) {
      fs.writeFile("./.gitignore", "", cb);

      // Игнорировать файлы и каталоги сборки и зависимостей
      fs.appendFile("./.gitignore", app.path.buildFolder.slice(2) + "/\r\n", cb);
      fs.appendFile("./.gitignore", "node_modules/\r\n", cb);
      fs.appendFile("./.gitignore", "bower_components/\r\n", cb);
      fs.appendFile("./.gitignore", "package-lock.json\r\n", cb);
      fs.appendFile("./.gitignore", "version.json\r\n", cb);

      // Игнорировать файлы, созданные ОС
      fs.appendFile("./.gitignore", "ehthumbs.db\r\n", cb);
      fs.appendFile("./.gitignore", "Thumbs.db\r\n", cb);
      fs.appendFile("./.gitignore", "*.DS_Store\r\n", cb);

      // Игнорировать файлы настроек редакторов
      fs.appendFile("./.gitignore", ".idea/\r\n", cb);
      fs.appendFile("./.gitignore", "*.sublime-project\r\n", cb);
      fs.appendFile("./.gitignore", "*.sublime-workspace\r\n", cb);
      fs.appendFile("./.gitignore", "*.komodoproject\r\n", cb);
      fs.appendFile("./.gitignore", ".vscode/*\r\n", cb);
      fs.appendFile("./.gitignore", "!.vscode/extensions.json\r\n", cb);

      // Игнорировать файлы карт
      fs.appendFile("./.gitignore", "*.css.map\r\n", cb);
      fs.appendFile("./.gitignore", "*.js.map\r\n", cb);

      // Игнорировать файлы кэша
      fs.appendFile("./.gitignore", ".sass-cache\r\n", cb);

      // Игнорировать логи
      fs.appendFile("./.gitignore", "logs/\r\n", cb);
      fs.appendFile("./.gitignore", "logs\r\n", cb);
      fs.appendFile("./.gitignore", "npm-debug.log*\r\n", cb);
      fs.appendFile("./.gitignore", "yarn-debug.log*\r\n", cb);
      fs.appendFile("./.gitignore", "yarn-error.log*\r\n", cb);
      fs.appendFile("./.gitignore", "pnpm-debug.log*\r\n", cb);
      fs.appendFile("./.gitignore", "lerna-debug.log*\r\n", cb);

      // Игнорировать архивы
      fs.appendFile("./.gitignore", "**/*.zip\r\n", cb);
      fs.appendFile("./.gitignore", "**/*.rar\r\n", cb);

      // Игнорировать папку с архивом файлов
      fs.appendFile("./.gitignore", ".DS_Store\r\n", cb);
      fs.appendFile("./.gitignore", ".idea\r\n", cb);
      fs.appendFile("./.gitignore", "*.suo\r\n", cb);
      fs.appendFile("./.gitignore", "*.ntvs*\r\n", cb);
      fs.appendFile("./.gitignore", "*.njsproj\r\n", cb);
      fs.appendFile("./.gitignore", "*.sln\r\n", cb);
      fs.appendFile("./.gitignore", "*.sw?\r\n", cb);
   }

   return app.gulp.src(`${app.path.srcFolder}`);
};

function cb() {}
