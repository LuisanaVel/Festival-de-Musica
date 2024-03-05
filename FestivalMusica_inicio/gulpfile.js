const {src, dest, watch} = require("gulp"); // esta es una forma de extraer la funcionalidad de gulp
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
    src('src/scss/**/*.scss')   // Identificar el archivo
        .pipe(plumber())
        .pipe(sass())              //Compilarlo (con sass)
        .pipe(dest("build/css"))  //Almacenarla en el disco duro
    done();
}


function dev(done) {
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.dev = dev