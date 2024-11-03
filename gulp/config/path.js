//Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`, //Можно использовать rootFolder
   srcFolder = `./src`;

export const path = {
   build: {
      root: buildFolder,
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/images/`,
      favicon: `${buildFolder}/images/favicons/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`,
      audio: `${buildFolder}/audio/`,
      video: `${buildFolder}/video/`,
   },
   src: {
      js: `${srcFolder}/js/*.js`,
      scss: `${srcFolder}/scss/*.scss`,
      html: `${srcFolder}/*.html`,
      svg: `${srcFolder}/images/vector/**/*.svg`,
      images: `${srcFolder}/images/pixels/**/*.{jpg,jpeg,png,gif,webp,avif,ico}`,
      svgicons: `${srcFolder}/images/sprite/*.svg`,
      favicon: `${srcFolder}/favicon.*`,
      files: `${srcFolder}/vendor/files/**/*.*`,
      vendorcss: `${srcFolder}/vendor/css/*.css`,
      vendorjs: `${srcFolder}/vendor/js/*.js`,
      vendorfonts: `${srcFolder}/vendor/fonts/*.{svg,ttf,woff,woff2}`,
      vendorimages: `${srcFolder}/vendor/images/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
      vendoraudio: `${srcFolder}/vendor/audio/**/*.{mp3,flac,wav,wma,aac,aiff,dsd,mqa,ogg}`,
      vendorvideo: `${srcFolder}/vendor/video/**/*.{mp4,mkv,avi,wmv,flv,swf,f4v,webm,3gp,asf,m4v,mov,mts,ogg,vob,avchd}`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/images/{pixels,vector}/**/*.{jpg,jpeg,png,svg,gif,webp,avif,ico}`,
      files: `${srcFolder}/vendor/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``,
};
