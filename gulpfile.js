var gulp = require("gulp");
var shell = require("shelljs");

gulp.task("restore-packages",function(){
    shell.exec("node node_modules/bower/bin/lib/bower.js install");
});