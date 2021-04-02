
const{
     crearArchivoTablaBase,
     crearArchivoTablas
} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
                         


crearArchivoTablaBase(argv.b,argv.l,argv.h)
.then(resul => console.log(resul))
.catch(err => console.log(err));

/*
crearArchivoTablas()
.then(resul => console.log(resul))
.catch(err => console.log(err));
*/



