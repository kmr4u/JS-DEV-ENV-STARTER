//resgister babel to traspile before mocha runs
require('babel-register')();

//disable file extennsions that mocha doesn't understand
require.extensions['.css']= function(){

};
