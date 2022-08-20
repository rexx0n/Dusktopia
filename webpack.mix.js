// webpack.mix.js

let mix = require("laravel-mix");

mix
  .js("main.js", "dist")
  //.setPublicPath("dist")
  .sass("style.scss", "dist/style.css");
