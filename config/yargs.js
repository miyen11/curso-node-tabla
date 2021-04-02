
const argv = require('yargs')
.option('l',{alias:'listar',type:'boolean',default:false,})
.option('h',{alias: 'hasta',type:'number',demandOption: true})
.option('b',{alias: 'base',type:'number',demandOption: true})
.check( (argv,option)=>{
     if(isNaN(argv.b)){
     throw 'La base tiene que ser un numerico';
     }
          return true;
     }).argv;

     module.exports = argv;




